---
title: Eigene Infrastruktur
description: Drei Hetzner-Server und eine Deploy-Kette, über die alle meine Projekte und die Kundenseiten von Shopitech ausgeliefert werden.
gruppe: shopitech
order: 1
zeitraum: seit 2026
status: In Betrieb
technik: [Hetzner Cloud, Docker Compose, GitHub Actions, GitHub Container Registry, Caddy, systemd, Bash]
aside: false
---

## Ausgangslage

Anfang Oktober 2026 lief mein erster Server dauerhaft voll. Der Kernel hat Prozesse wegen Speichermangel beendet, der Swap war komplett belegt, und auf demselben Rechner liefen Kundenseiten neben Experimenten. Außerdem wurde dort direkt gebaut, und jedes Projekt hatte seinen eigenen Weg in die Produktion.

Ich habe deshalb erst eine Bestandsaufnahme gemacht, bei der nur gelesen wurde, und danach die Infrastruktur in Phasen umgebaut. Jede Phase hatte eine Abnahme und einen Rückweg. Heute haben drei Hetzner-Server jeweils eine klare Rolle, und ein Repository beschreibt, welche App wo läuft und wie sie dorthin kommt.

| Server | Rolle |
|---|---|
| shose1 | Produktion für Kundenprojekte und Anwendungen mit echten Nutzern |
| shose2 | Eigene Werkzeuge und leichte Demos |
| shose3 | Demos mit schweren Abhängigkeiten wie Keycloak oder eigenen Datenbanken |

## Die Deploy-Kette

Der wichtigste Grundsatz: Kein Server baut. Images entstehen in GitHub Actions oder notfalls lokal und landen in der GitHub Container Registry. Auf dem Server wird nur gezogen und gestartet.

```
git push
  -> GitHub Actions (wiederverwendbarer Workflow)
  -> Image nach ghcr.io, Tag JJJJ.MM.TT-<commit>
  -> ssh deploy@server "deploy <app> <tag>"
  -> pull, starten, Healthcheck
       ok:     neue Version wird festgeschrieben
       Fehler: automatisch zurück auf die vorherige Version
```

Jedes App-Repository ruft denselben Workflow aus dem Infrastruktur-Repository auf. Ein neues Projekt anzubinden heißt also, eine Vorlage zu kopieren und drei Secrets anzulegen, und auch das übernimmt ein Befehl. Der SSH-Schlüssel der CI darf auf dem Server genau ein Skript aufrufen, das den Aufruf prüft und erst dann mit erhöhten Rechten das eigentliche Deployment startet.

Das Tag-Format ist in der CI und im lokalen Werkzeug identisch. So sehe ich an jedem laufenden Container, von welchem Tag und Commit er stammt.

## Pro App eine Definition

Jede Anwendung hat einen eigenen Ordner mit einer Compose-Datei, die nur auf ein Image verweist und nie selbst baut, einer Caddy-Konfiguration für Domain und Zertifikat und einer kurzen README mit Port, Datenpfaden und Besonderheiten. Ports sind über alle Server eindeutig vergeben und nur an `127.0.0.1` gebunden. Von außen erreichbar ist ausschließlich Caddy.

Ein lokales Kommandozeilenwerkzeug fasst die wiederkehrenden Aufgaben zusammen: bauen, ausrollen, Secrets anlegen, alle Domains durchprüfen. Für [Tavola](/projekte/tavola) gibt es einen Sonderweg, bei dem geänderte Kundenkonfigurationen ganz ohne neues Image ausgerollt werden.

## Betrieb

Für wiederkehrende Vorgänge wie den Umzug einer Anwendung zwischen Servern gibt es Runbooks, und ein laufendes Protokoll hält fest, wo die Wirklichkeit vom Plan abweicht. Zum Repository gehören Tests für die Stacks, damit eine kaputte Compose-Datei auffällt, bevor sie auf einem Server landet.

Ein paar Java-Dienste wie die Pipelines hinter [Stoistic Forge](/projekte/stoistic-forge) laufen bewusst ohne Container als Uber-Jar unter systemd. Für einen einzelnen langlaufenden Prozess ist das einfacher zu beobachten und braucht weniger Speicher.

## Was ich daraus mitnehme

Das meiste davon mache ich seit Mai 2026 auch beruflich, nur in größerem Maßstab. Viele Fragen sind dieselben: Wo wird gebaut, wie kommt ein Artefakt nachvollziehbar in eine Umgebung, und was passiert, wenn das Update schiefgeht. An drei eigenen Servern kann ich Ideen schnell ausprobieren und sehe sofort, was im Alltag trägt.
