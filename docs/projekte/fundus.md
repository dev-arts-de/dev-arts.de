---
title: Fundus
description: Ein Archiv für alle Dokumente unseres Haushalts, das Dateien selbst einordnet, durchsuchbar macht und sich aus der Claude-App heraus befragen lässt.
gruppe: aktuell
order: 1
zeitraum: seit November 2026
status: In Betrieb
technik: [Python, SQLite mit FTS5, Swift mit PDFKit und Vision, Claude Code, MCP, OAuth 2.1, Docker, Caddy]
aside: false
---

## Das Problem

Auf meinem Mac lagen über die Jahre gut 19.000 Dateien verteilt auf Downloads, Schreibtisch, Dokumente und iCloud Drive. Rechnungen, Verträge, Gehaltsabrechnungen, Scans, dazu viel Kram. Wenn ich ein bestimmtes Dokument gesucht habe, hat das oft länger gedauert als die Aufgabe, für die ich es brauchte.

Fundus räumt diesen Bestand auf und hält ihn danach in Ordnung. Jede Datei bekommt einen festen Platz in einer Ordnerstruktur mit nummerierten Bereichen wie `20 Finanzen/22 Steuern` und einen Namen nach dem Muster `Datum_Absender_Titel`.

## Wie es arbeitet

Der Ablauf besteht aus einzelnen Befehlen, die jeweils eine Sache tun und sich unterbrechen und fortsetzen lassen:

1. **Bestandsaufnahme:** Alle Dateien scannen, Dubletten über Prüfsummen finden, Bericht schreiben. Nur lesend.
2. **Textauszug:** PDFs mit Textebene direkt auslesen, Scans und Fotos per OCR. Dafür habe ich ein kleines Swift-Werkzeug geschrieben, das PDFKit und Apples Vision-Framework nutzt, sodass alles lokal auf dem Mac passiert.
3. **Einordnung:** Claude bekommt den Text und schlägt Bereich, Datum, Absender, Titel und Themen vor. Die Antwort ist an ein JSON-Schema gebunden. Der Lauf über rund 4.300 Dokumente hat etwa 45 Minuten gedauert.
4. **Prüfen und Ablegen:** Eine lokale HTML-Seite zeigt alle Vorschläge. Erst nach meiner Freigabe wird verschoben oder umbenannt. Gelöschtes landet im Papierkorb, jede Aktion steht in einem CSV-Protokoll und lässt sich zurücknehmen.

Danach gibt es eine Volltextsuche über SQLite mit FTS5 und eine Wissensschicht: Seiten pro Bereich und pro Thema, etwa für eine Anstellung oder ein Auto, mit den wichtigsten Fakten, offenen Punkten und Verweisen auf die Originaldokumente.

## Fragen aus der Claude-App

Der Teil, der am meisten Spaß gemacht hat, ist der Connector. Auf einem meiner Server läuft ein MCP-Server, den ich in der Claude-App als eigenen Connector eingetragen habe. Damit kann ich auf dem Handy fragen, wann die Kfz-Versicherung fällig wird, und Claude sucht im Archiv nach der Antwort.

Weil dort private Dokumente liegen, habe ich die Sicherheit vor dem Code geplant:

- Alle Werkzeuge sind nur lesend. Selbst wenn ein präpariertes Dokument Anweisungen enthält, kann Claude darüber nichts verändern oder löschen.
- Anmeldung über OAuth 2.1 mit PKCE aus dem offiziellen MCP-SDK, dahinter Passwort und Einmalcode aus einer Authenticator-App. Passwörter liegen als scrypt-Hash, Tokens nur als SHA-256.
- Weiterleitungsziele sind auf die Claude-Domains beschränkt, Fehlversuche führen zu einer Sperre, jeder Werkzeugaufruf wird protokolliert.
- Zugangsdaten wie Wiederherstellungscodes werden gar nicht erst übertragen, nur ihr Titel und Ablageort. Kontonummern und Steuernummern werden im Text geschwärzt.

Für Momente ohne KI gibt es dieselbe Suche als schlichte Weboberfläche, ohne JavaScript und mit einer Content Security Policy, die weder Skripte noch Inline-Styles erlaubt.

## Betrieb

Die KI-Aufrufe laufen über die Kommandozeile von Claude Code und damit über mein bestehendes Abo, nicht über die API. Auf dem Mac gleicht ein launchd-Job stündlich neue Mail-Anhänge ab, die ein kleiner Dienst auf dem Server per IMAP IDLE aussortiert. Der Server-Teil läuft in Docker hinter Caddy. Zum Projekt gehören inzwischen rund 240 pytest-Tests.
