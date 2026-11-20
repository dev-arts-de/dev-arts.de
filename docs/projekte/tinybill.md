---
title: TinyBill und quitt
description: Drei Anläufe für dasselbe Problem, Rechnungen schreiben. Ein kostenloser Generator, eine Kotlin-API und heute eine eigene Rechnungs-App mit E-Rechnung.
gruppe: aktuell
order: 7
zeitraum: 2025 bis heute
status: quitt in Arbeit, TinyBill offline
technik: [TypeScript, Next.js 16, Drizzle, PostgreSQL, Typst, Kotlin, Spring Boot, Angular, Vaadin]
aside: false
---

## Woher das Thema kommt

Bei der Infokom habe ich gut zwei Jahre an einer Anwendung für die Rechnungsverarbeitung gearbeitet. Dabei lernt man, wie viel in einer Rechnung steckt: Steuersätze, Rundung, Skonto, Pflichtangaben und elektronische Formate wie ZUGFeRD und XRechnung. Dieses Wissen wollte ich nicht einfach liegen lassen, und gleichzeitig habe ich für meine eigenen Rechnungen kein Werkzeug gefunden, das kostenlos, einfach und ohne Konto funktioniert.

## TinyBill, Version 1

Die erste Version ging im Sommer 2025 unter tinybill.de online: ein kostenloser Generator für Rechnungen als PDF, ohne Anmeldung und ohne dass Daten auf dem Server bleiben. Gebaut habe ich sie mit Spring Boot und Vaadin, weil ich Vaadin von der Infokom gut kannte und schnell etwas Benutzbares haben wollte.

Eigentlich wollte ich ZUGFeRD schon in diese Version einbauen. Als ich Nutzer gefragt habe, wollte das aber fast niemand. Gewünscht waren eine stabilere PDF-Erzeugung und eine bessere Vorschau, also habe ich das gebaut.

## TinyBill, Version 2

Für die zweite Version habe ich neu angefangen und mir dabei Kotlin beigebracht. Das Backend ist eine reine REST-API mit Spring Boot in Kotlin. Der Zugriff läuft pro Workspace über einen API-Schlüssel, die API erzeugt PDFs aus drei Vorlagen und druckt einen Zahlungs-QR-Code im EPC-Format auf die Rechnung, den Banking-Apps direkt als Überweisung einlesen. Ein Angular-Frontend war der erste Client, weitere sollten folgen.

Was mir an Kotlin gefallen hat: Null-Safety zwingt dazu, über fehlende Werte nachzudenken, bevor sie zum Fehler werden, und Data Classes sparen bei Rechnungspositionen viel Schreibarbeit. An Version 2 habe ich zuletzt im März 2026 gearbeitet, und tinybill.de ist inzwischen offline.

## quitt

Was ich am Ende wirklich gebraucht habe, war ein Werkzeug für meine eigenen Rechnungen. Daraus ist quitt geworden, eine interne Rechnungs-App, an der ich seit Herbst 2026 baue. Sie kann Abschlags- und Schlussrechnungen, erzeugt beim Ausstellen eine E-Rechnung nach ZUGFeRD (EN 16931) und XRechnung, verschickt Rechnungen und Zahlungserinnerungen per Mail, prüft Umsatzsteuer-IDs online und exportiert alles für die Steuerberatung.

```
Laufzeit       Node.js 24, Next.js 16, React 19, TypeScript
Daten          PostgreSQL, Drizzle ORM, pg-boss für Hintergrundjobs
Dokumente      Typst für den PDF-Satz, E-Rechnung über @e-invoice-eu/core
Anmeldung      better-auth mit Passkeys
Tests          Vitest, Playwright, Testcontainers, fast-check
Qualität       ESLint mit Security-Regeln, dependency-cruiser, knip
Betrieb        Docker hinter Caddy auf eigener Infrastruktur
```

Weil es um Geld geht, sind die Tests hier strenger als in meinen anderen Projekten. Beträge, Datumslogik und Rechnungssummen werden zusätzlich mit Property-based Tests geprüft, die viele zufällige Eingaben durchspielen, statt nur die Fälle, an die ich beim Schreiben gedacht habe. dependency-cruiser prüft die erlaubten Abhängigkeiten zwischen den Modulen, und knip findet ungenutzten Code.
