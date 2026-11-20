---
title: Foxfolio
description: Ein Generator, der aus einmal eingegebenen Daten eine gehostete Portfolio-Seite für Bewerbungen macht.
gruppe: frueher
order: 1
zeitraum: 2023 bis 2024
status: Pausiert, Idee lebt in der Bewerber-Schmiede weiter
technik: [Java, Spring Boot, Vaadin]
aside: false
---

## Die Idee

Ein Lebenslauf sagt, wann jemand wo war, aber wenig darüber, wie jemand arbeitet. Eine eigene Portfolio-Seite kann das, nur muss man dafür bisher selbst Webentwickler sein. Foxfolio sollte diesen Aufwand abnehmen: Daten einmal in ein Formular eintragen, und das System erzeugt daraus eine fertige Website, gehostet unter einer Foxfolio-Subdomain oder einer eigenen Domain. Gedacht war das als Alternative zu Profilen auf Jobportalen und PDF-Anhängen.

## Technik

Geplant waren zwei Teile: ein Spring-Boot-Backend für Daten, Generierung und Domainverwaltung und eine Oberfläche in Vaadin, das ich von der Infokom gut kannte und das für eine formulargetriebene Anwendung sehr schnell zum Ziel führt. Aus den strukturierten Daten sollten statische Seiten entstehen, jede einzeln auslieferbar unter ihrer eigenen Adresse. Rund um die Idee sind mehrere Prototypen entstanden, für Datenbankschema, Vorschau und Hosting.

## Stand

Die Entwicklung ruht seit 2024. Die Idee ist aber nicht weg: In der [Bewerber-Schmiede](/projekte/bewerber-schmiede) ist Foxfolio als drittes Werkzeug neben Lebenslauf-Analyse und Anschreiben angekündigt.
