---
title: Tavola
description: Eine Plattform, die aus einer einzigen Konfigurationsdatei eine fertige Restaurant-Website macht. Neue Kunden brauchen keinen Build und kein Deployment.
gruppe: shopitech
order: 2
zeitraum: seit 2026
status: In Betrieb, Version 2 in Arbeit
technik: [Next.js, React, TypeScript, Tailwind CSS, Zod, Vitest]
aside: false
---

## Die Idee

Kleine Restaurants haben oft gar keine eigene Website oder eine, die seit Jahren niemand angefasst hat. Ein Angebot per Mail überzeugt dort selten. Was funktioniert: dem Inhaber seinen eigenen Laden zu zeigen, schon fertig als Website.

Genau dafür ist Tavola da. Für ein Restaurant lege ich eine Demo unter einer eigenen Subdomain an, mit Namen, Speisekarte, Öffnungszeiten, Farben und Fotos. Der Link kommt als QR-Code auf eine Postkarte. Wer ihn scannt, sieht sein eigenes Restaurant mit Namen und Speisekarte.

## Ein Kunde ist eine Datei

Technisch ist Tavola eine einzige Next.js-Anwendung, die für jede Subdomain eine andere Website ausliefert:

```
cafe-mueller.shopitech.de ─┐
pizza-bella.shopitech.de  ─┼─> eine Next.js-App -> tenants/<slug>.json
tavola.shopitech.de       ─┘
```

Ein Proxy liest den Hostnamen und gibt den passenden Kunden-Schlüssel an die Anwendung weiter. Zur Laufzeit wird dann die JSON-Datei dieses Kunden geladen, über eine neutrale Grundkonfiguration gelegt und mit Zod gegen das Schema geprüft. Die Datei enthält nur, was vom Standard abweicht: Name, Texte, Farben, Fotos und welche Funktionen eingeschaltet sind.

Weil die Konfiguration nach Änderungszeit gecacht wird, wirkt eine geänderte Datei sofort, ohne Neustart. Einen neuen Kunden anzulegen heißt, eine Datei zu schreiben. Auf dem Server gibt es dafür einen eigenen Weg in der [Deploy-Kette](/projekte/infrastruktur), der nur den Ordner mit den Kundendateien aktualisiert.

## Qualität

Der Kern ist mit Vitest getestet: das Auflösen der Subdomain im Proxy, das Zusammenführen der Konfigurationen, das Schema und die Logo-Erkennung, die ein vorhandenes Logo von der alten Website des Restaurants übernimmt. Ein Smoke-Test crawlt alle Routen gegen einen laufenden Server. Für Version 2 habe ich vorher Arbeitspakete mit Abnahmekriterien festgelegt, etwa dass eine Demo auf dem Handy wie eine Agenturseite wirken muss und keine Inhaltsfehler enthalten darf.

## Wie es weitergeht

Das Prinzip lässt sich auf andere Branchen übertragen. Für Handwerksbetriebe, Arztpraxen und Fitnessstudios gibt es bereits Pläne mit eigenen Domänenmodellen, also Leistungen statt Speisekarte und Stundenplan statt Mittagstisch.
