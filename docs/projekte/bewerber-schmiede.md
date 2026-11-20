---
title: Bewerber-Schmiede
description: Werkzeuge für die Bewerbung. Eine Lebenslauf-Analyse mit Bewertung und ATS-Check und ein Generator für Anschreiben, der auf dieser Analyse aufbaut.
gruppe: aktuell
order: 6
zeitraum: seit 2026
status: Online
technik: [Next.js 16, React, TypeScript, Prisma, PostgreSQL, Claude API, Stripe, next-intl, Docker]
link: { href: 'https://www.bewerber-schmiede.de', text: 'bewerber-schmiede.de' }
aside: false
---

## Worum es geht

Wenn Freunde mich um Hilfe bei ihrer Bewerbung gebeten haben, waren meine Hinweise fast immer dieselben: Erfolge ohne Zahlen, zu allgemeine Formulierungen, unklare Zeiträume, fehlende Begriffe aus der Stellenanzeige. Das ist kein Spezialwissen, aber man muss es jemandem sagen. Die Bewerber-Schmiede macht das automatisch und sofort.

Es gibt zwei Werkzeuge:

- **Talentblick** analysiert einen hochgeladenen Lebenslauf. Heraus kommen eine Gesamtbewertung, Einzelbewertungen pro Kategorie, ein Check, ob Bewerbermanagementsysteme das Dokument sauber lesen können, und auf Wunsch ein Abgleich mit einer konkreten Stellenanzeige.
- **Anschreibomat** erzeugt aus dieser Analyse und der Stellenanzeige ein Anschreiben, das man direkt weiterbearbeiten kann.

Neue Nutzer bekommen ein Startguthaben, danach gibt es Credits ohne Abo. Als drittes Werkzeug soll [Foxfolio](/projekte/foxfolio) dazukommen, die Idee einer automatisch erzeugten Portfolio-Seite, die ich 2023 schon einmal angefangen hatte.

## Wie es gebaut ist

Die Anwendung ist mit Next.js 16 und dem App Router gebaut, Daten liegen über Prisma in PostgreSQL: Nutzer, gespeicherte Lebensläufe, Analysen, Anschreiben und Zahlungen. Die Analyse läuft über die Claude-API mit Sonnet. Der Prompt gibt ein festes JSON-Schema vor, die Antwort wird geparst und als Analyse gespeichert, aus der später das Anschreiben entsteht. Die Stellenanzeige kann man als Text einfügen oder als Link angeben, dann liest der Server die Seite selbst aus. Die API-Routen haben ein Rate Limit, bezahlt wird über Stripe, und die Oberfläche ist über next-intl mehrsprachig angelegt.

Die Bewerber-Schmiede war mein erstes Projekt, das ich konsequent mit Claude Code als Entwicklungspartner gebaut habe. Ich habe die Architektur und jedes Feature vorher beschrieben, den Agenten umsetzen lassen und das Ergebnis geprüft, als käme es von einem Kollegen. Das hat mich gezwungen, Entscheidungen ausdrücklicher zu treffen, als ich es allein getan hätte, weil ein Werkzeug, das Rückfragen stellt, eine Begründung braucht.

## Was ich gelernt habe

Ein Sprachmodell hält sich an ein Schema, das im Prompt steht, aber nicht immer an die Form drumherum. Manchmal kommt das JSON in einem Markdown-Codeblock zurück, also entfernt der Code diesen Rahmen vor dem Parsen. Solche Kleinigkeiten machen den Unterschied zwischen einer Demo und einem Werkzeug, das Leute bezahlen.
