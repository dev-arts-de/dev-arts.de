---
title: DailyDev
description: Ein Lernsystem mit 584 Themen zur Java-Entwicklung, das mir jeden Morgen ein Thema aufs Handy schickt. Läuft auf einem Raspberry Pi unter meinem Schreibtisch.
gruppe: aktuell
order: 8
zeitraum: seit März 2026
status: Online
technik: [VitePress, Vue, Java, Spring Boot, Raspberry Pi, systemd, ntfy]
link: { href: 'https://jscope.dev-arts.de', text: 'jscope.dev-arts.de' }
aside: false
---

## Die Idee

Nach einem langen Arbeitstag noch ein Fachbuch aufzuschlagen klingt gut und passiert selten. Ich wollte, dass Lernen ohne Entscheidung stattfindet. DailyDev sucht jeden Morgen ein Thema aus und schickt es mir aufs Handy. Ich lese es, beantworte die Fragen dazu und bin nach zehn bis zwanzig Minuten fertig.

## Die Themen

Die Wissensbasis heißt Java Wissensmap und umfasst 584 Themen, eingeteilt in 130 für den Einstieg, 315 mittlere und 139 fortgeschrittene. Sie reichen von Sprachgrundlagen über JVM-Interna wie Garbage Collection, Classloader und das Speichermodell bis zu Designmustern, Transaktionsisolation, Indexstrategien, Architekturstilen wie hexagonaler Architektur oder CQRS, Teststrategien und Betrieb. Jedes Thema hat eine Erklärung, Codebeispiele und Kontrollfragen, und die Themen verweisen aufeinander.

## Technik

Die Inhalte liegen als Markdown-Dateien in einer VitePress-Seite mit eigenem Theme und lokaler Volltextsuche über alle Themen. Interaktive Teile wie die Selbsttests sind Vue-Komponenten direkt im Markdown.

Die tägliche Auslieferung übernimmt ein kleiner Spring-Boot-Dienst auf einem Raspberry Pi im Heimnetz. Er läuft als systemd-Unit, wählt per Cron-Ausdruck zur festen Uhrzeit das nächste Thema aus und schickt eine Push-Nachricht über ntfy mit dem direkten Link. Kein Mailpostfach, keine App, kein Konto.

## Was es gebracht hat

Der größte Effekt war ein anderer als erwartet. Ich wusste nicht unbedingt mehr, aber ich konnte Dinge besser erklären, die ich jahrelang benutzt hatte, ohne sie je in Worte zu fassen. Und der Pi hat mir beigebracht, wie es ist, für einen Rechner verantwortlich zu sein, der einfach laufen muss. Wenn er hängt, kommt morgens keine Nachricht, und dann suche ich im Log.
