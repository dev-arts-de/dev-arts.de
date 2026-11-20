---
title: Stoistic Forge
description: Ein Blog über stoische Philosophie, dessen Artikel eine mehrstufige KI-Pipeline schreibt, prüft, bebildert und veröffentlicht. Auf Deutsch und Englisch.
gruppe: aktuell
order: 4
zeitraum: seit April 2026
status: Online, Entwicklung pausiert
technik: [Java 21, Quarkus, PostgreSQL, Flyway, Claude API, Fal.ai, VitePress, Vue, GitHub Actions]
link: { href: 'https://www.stoistic-forge.de', text: 'stoistic-forge.de' }
aside: false
---

## Worum es geht

Seneca, Epiktet und Marc Aurel lese ich schon länger. Online findet man unter dem Stichwort Stoizismus aber viel verkürzte Lebensberatung, die mit den Originaltexten wenig zu tun hat. Stoistic Forge ist der Versuch, das besser zu machen, und zwar ohne dass ich jeden Artikel selbst schreibe: eine Pipeline erzeugt aus den Originalquellen eigene Artikel, prüft sie und verwirft, was nicht gut genug ist.

Technisch wollte ich herausfinden, was es braucht, damit ein Sprachmodell jeden Tag zuverlässig veröffentlicht. Ein einzelner Aufruf liefert meistens etwas Brauchbares. Für einen Blog, der unbeaufsichtigt läuft, reicht „meistens“ aber nicht.

## Die tägliche Pipeline

Zweimal am Tag, um 6 und um 15 Uhr, startet ein Scheduler einen Lauf mit fünf Stufen. Scheitert eine, bricht der Lauf ab und landet im Log.

```
06:00 / 15:00  ArticlePipeline

  1  TopicSelectionAgent       Claude Haiku
  2  ArticleGenerationAgent    Claude Sonnet
  3  QualityReviewAgent        Claude Sonnet, bis zu 3 Versuche
  4  ImageGenerationService    Fal.ai, Flux Schnell
  5  Veröffentlichen, Push-Nachricht, Frontend neu bauen
```

Die Themenwahl bekommt die bisher veröffentlichten Themen und Kategorien und sucht daraus das nächste aus. Dafür reicht das kleine Modell. Den Artikel schreibt Sonnet auf Basis eines Styleguides und passender Stellen aus den Originaltexten. Danach bewertet ein eigener Review-Schritt Treue zur stoischen Lehre, Sprache, leere Floskeln und Länge. Fällt der Artikel durch, wird neu geschrieben, höchstens dreimal. Danach bekommt der Tag lieber keinen Artikel als einen schlechten.

Das Titelbild entsteht über Fal.ai, der Prompt dafür wird aus dem Artikel abgeleitet. Zum Schluss landet alles in PostgreSQL, ein Deploy-Hook baut das statische Frontend neu, und ich bekomme eine Push-Nachricht über ntfy mit dem Link.

## Das System verbessert sich selbst, mit Freigabe

Montags früh läuft ein zweiter Scheduler. Ein Agent wertet die Reviews der Woche aus und schlägt Änderungen am Styleguide vor, wenn dieselben Schwächen wiederholt auftauchen. Ein anderer schlägt Änderungen am Datenbankschema vor, ein dritter kuratiert die Startseite, ein vierter testet Varianten der Prompts über eine feste Zahl von Läufen gegeneinander. Schemavorschläge wende ich nie automatisch an, die lese ich selbst. Sonntagabends kommt ein Wochenbericht als HTML-Mail.

## Später dazugekommen

Seit Juni 2026 übersetzt das Backend alle Inhalte ins Englische, mit eigenem Glossar für Begriffe und Personen und einem Backfill für ältere Artikel. Die englische Seite hat ihren eigenen Deploy-Hook. Außerdem lassen sich Sprachmodell, Embeddings und Sprachausgabe per Schalter auf andere Anbieter umstellen, neben Claude auch Gemini und ein lokales Modell über Ollama. Bei erreichten Kontingentgrenzen pausiert die Pipeline kontrolliert, statt in Fehler zu laufen, und vorübergehende Serverfehler werden automatisch wiederholt.

## Technik

```
Laufzeit        Java 21, Quarkus, Uber-Jar unter systemd
Daten           PostgreSQL, Hibernate mit Panache, Flyway
KI              Claude Haiku und Sonnet, Gemini und Ollama als Alternative, Fal.ai
Monitoring      SmallRye Health, Micrometer mit Prometheus-Export
Frontend        VitePress und Vue, statisch gebaut, eigenes Repository
Auslieferung    GitHub Actions, main nach Produktion, staging nach Staging
Tests           JUnit, REST Assured
```

Quarkus statt Spring Boot habe ich wegen der kurzen Startzeit und des geringen Speicherbedarfs gewählt, der Dienst läuft auf einem kleinen Server neben anderen. Er läuft bewusst ohne Container direkt unter systemd, mit Caddy davor.

## Was ich gelernt habe

Die Qualität hängt viel mehr am Styleguide und an der Strenge des Reviews als am Modell. Wer beim Review großzügig ist, bekommt mittelmäßige Texte. Ich lese stichprobenweise mit und greife nur ein, wenn ein Fehler systematisch auftritt. Am Code habe ich zuletzt im Juli 2026 gearbeitet.
