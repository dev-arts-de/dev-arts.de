---
title: DeinNotruf und Notfallpass
description: Website eines Hausnotruf-Dienstes in der Region Karlsruhe und ein digitaler Notfallpass als Web-App, iOS-App und API.
gruppe: aktuell
order: 2
zeitraum: 2025 bis 2026
status: Website online, Notfallpass pausiert
technik: [Next.js, Java 21, Spring Boot 3, PostgreSQL, Angular 19, Swift, SwiftUI, Docker]
link: { href: 'https://www.dein-notruf.de', text: 'dein-notruf.de' }
aside: false
---

## Worum es geht

DeinNotruf ist ein Hausnotruf-Dienst für Karlsruhe und den Landkreis: ein Knopf am Handgelenk oder am Gerät in der Wohnung, und eine Leitstelle meldet sich rund um die Uhr. Das Projekt ist Ende 2025 zusammen mit einer Freundin entstanden. Ich habe die Technik gebaut, also die Website und den Digitalen Notfallpass.

Die Zielgruppe sind Menschen ab 65 und ihre Angehörigen. Danach richtet sich die Seite: ein sachlicher, ruhiger Ton, eine Telefonnummer, die auf jeder Seite ganz oben steht, und Preise, die man ohne Kleingedrucktes versteht.

## Die Website

Die Seite ist mit Next.js gebaut und läuft auf Vercel. Im Oktober 2026 habe ich sie mit einem neuen Designsystem neu aufgesetzt. Kern ist ein Preiskonfigurator, der zeigt, was ein Paket mit und ohne Pflegegrad kostet, weil die Pflegekasse ab Pflegegrad 1 einen Teil der monatlichen Kosten übernimmt. Anfragen kommen über ein Rückruf-Formular, das über Resend verschickt. Fehlt der API-Schlüssel, bietet das Formular stattdessen den Versand über das eigene Mailprogramm an, damit keine Anfrage verloren geht.

Überrascht hat mich der Aufbau der Social-Media-Kanäle. In der Alten- und Gesundheitspflege unterstützen sich die Leute gegenseitig auffallend stark, so wie ich es in kaum einer anderen Branche erlebt habe. Reichweite kam dadurch fast von allein.

## Der Digitale Notfallpass

Im Notfall wissen Rettungskräfte oft nicht, welche Medikamente jemand nimmt, welche Allergien es gibt und wen sie anrufen sollen. Der Notfallpass sammelt das an einer Stelle, ohne dass man sich irgendwo registrieren muss. Gebaut habe ich ihn aus drei Teilen:

| Teil | Technik |
|---|---|
| API | Java 21, Spring Boot 3.3, PostgreSQL 16 mit JSONB, Flyway, Testcontainers |
| Web-App | Angular 19 mit Standalone Components und Signals, Tailwind CSS |
| iOS-App | SwiftUI ab iOS 17, SwiftData für den Offline-Betrieb |

Die API kennt keine Konten. Ein Pass wird über eine UUID angelegt, und beim Erstellen gibt es einmalig einen Bearbeitungstoken. Wer den Token hat, kann ändern und löschen, alle anderen können nur lesen. Gelöscht wird nur weich. Die Passdaten liegen als JSONB-Dokument in PostgreSQL, weil die API sie ohnehin nur als Ganzes liest und schreibt. Metriken gehen über Spring Actuator an Prometheus und Grafana.

Die Web-App führt in fünf Schritten durch das Formular, speichert zwischendurch automatisch und druckt den Pass als A4-Blatt in mehreren Sprachen oder im Scheckkartenformat zum Falten. Geteilt wird per QR-Code. Die iOS-App hält die Daten offline in SwiftData und gleicht sie über die API ab. Angelegt sind außerdem das Vorausfüllen von Blutgruppe, Größe und Gewicht aus HealthKit und ein Pass für Apple Wallet.

## Stand

Die Website ist online. Beim Relaunch im Oktober 2026 ist der Notfallpass aus dem Angebot auf der Website verschwunden. Web-App und API sind fertig, die iOS-App ist nicht im App Store. Der Code liegt bereit, falls das Thema wieder aufkommt.
