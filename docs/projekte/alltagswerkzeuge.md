---
title: Kleine Werkzeuge
description: Ein Angebotsvergleich für den Wocheneinkauf, eine Erinnerungs-App, die nicht lockerlässt, und ein Sprachmodell auf dem Raspberry Pi, das jeden Tag ein Gedicht schreibt.
gruppe: aktuell
order: 9
zeitraum: 2025 bis 2026
status: Teils in Gebrauch
technik: [TypeScript, Node.js 24, Hono, SQLite, Elixir, Phoenix LiveView, ntfy, Docker]
aside: false
---

Nicht alles muss ein Produkt werden. Diese drei Werkzeuge habe ich für mich und unseren Haushalt gebaut, und an jedem habe ich etwas ausprobiert, das ich vorher nicht kannte.

## Schnapper

Schnapper beantwortet jede Woche die Frage, wo wir unsere üblichen Produkte gerade am günstigsten bekommen. Die App holt die Prospektangebote von sechs Läden in unserem Ort und gleicht sie mit einer Liste unserer Stammprodukte ab. Auf der Startseite steht, welche davon diese Woche oder ab nächster Woche im Angebot sind. Daraus wird ein Einkaufszettel, sortiert nach Laden und in der Reihenfolge, in der man durch den Laden läuft. Ein Laden fällt raus, wenn er insgesamt weniger als 50 Cent spart.

Weil Angebote oft in anderen Packungsgrößen kommen, rechnet Schnapper über den Grundpreis pro Liter, Kilo oder Stück auf unsere Packung um. Normalpreise trage ich selbst ein.

Technisch wollte ich sehen, wie weit man mit Node.js ohne Build-Schritt kommt. Node 24 führt die TypeScript-Dateien direkt aus, als Webframework dient Hono, gespeichert wird im eingebauten `node:sqlite`, validiert mit Zod. Getestet wird mit dem eingebauten Test-Runner von Node. Die App läuft in Docker auf meiner [Infrastruktur](/projekte/infrastruktur).

## noisy-chirp

Eine Erinnerungs-App für Dinge, die man gern vergisst, zum Beispiel den Bürstenkopf der Zahnbürste zu wechseln. Wer eine Erinnerung ignoriert, bekommt sie in immer kürzeren Abständen erneut aufs Handy. Wer sie verdächtig schnell wegtippt, muss irgendwann schwören, dass die Aufgabe wirklich erledigt ist.

Gebaut habe ich sie in Elixir mit Phoenix LiveView, weil ich das Prozessmodell ausprobieren wollte. Jede Aufgabe ist ein eigener GenServer, der seinen Timer selbst hält. Ein Supervisor startet beim Hochfahren alle aktiven Aufgaben neu, und die Datenbank bleibt die Quelle der Wahrheit. Die Eskalation ist als reine Funktion geschrieben und dadurch leicht zu testen. Push-Nachrichten gehen über ntfy, die Texte kann optional ein Sprachmodell formulieren. Der Code ist [auf GitHub](https://github.com/dev-arts-de/noisy-chirp).

## daily-pi-poetry

Ein kleines Experiment auf dem Raspberry Pi, auf dem auch [DailyDev](/projekte/dailydev) läuft: Ein quantisiertes Sprachmodell schreibt dort jeden Tag per Cron-Job ein kurzes Gedicht und schickt es mir aufs Handy. Ohne Cloud, ohne API-Schlüssel und ohne Internetverbindung zur Laufzeit. Mich hat interessiert, was auf einem kleinen ARM-Rechner überhaupt möglich ist. Für eine klar begrenzte Aufgabe reicht es erstaunlich gut. Der Code ist [auf GitHub](https://github.com/dev-arts-de/daily-pi-poetry).
