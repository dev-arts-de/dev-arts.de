---
title: wunschliste-selina.de
description: Eine Wunschliste für meine Freundin, die ihre Amazon-Liste automatisch übernimmt, Wünsche aus beliebigen Shops erlaubt und Geschenke anonym reservieren lässt.
gruppe: persoenlich
order: 1
zeitraum: seit November 2025
status: Online
technik: [Next.js 16, React 19, Tailwind CSS 4, Prisma, Vercel Postgres]
link: { href: 'https://www.wunschliste-selina.de', text: 'wunschliste-selina.de' }
aside: false
---

## Worum es geht

Selina hat irgendwann erwähnt, dass ihr die Amazon-Wunschliste zu nüchtern ist und dass dort nichts aus kleineren Shops draufpasst. Ein paar Wochenenden später gab es diese Seite. Familie und Freunde sehen, worüber sie sich freut, und können untereinander klären, wer was schenkt, ohne dass es doppelt passiert.

## Funktionen

Ein täglicher Cron-Job holt die hinterlegten Amazon-Wunschlisten ab, liest die Produkte aus und gleicht sie mit der Datenbank ab: Bestehendes wird aktualisiert, Neues ergänzt, Entferntes als gelöscht markiert. Zusätzlich kann Selina eigene Wünsche aus jedem beliebigen Shop anlegen, mit Bild, Notiz, Kategorie und mehreren Händler-Links.

Wer etwas schenken möchte, reserviert den Wunsch mit einem Klick. Dafür braucht niemand ein Konto. Die Reservierung hängt an einem Token, der im Browser gespeichert wird, sodass man sie später auch wieder zurücknehmen kann. Selina sieht nur, dass etwas reserviert ist, aber nicht von wem.

## Gestaltung

Die Seite sieht bewusst ganz anders aus als meine übrigen Projekte: helle Farben, runde Ecken, kleine Herzen für Lieblingswünsche und Markierungen wie „Traum“ oder „Top!“, die Selina selbst vergibt. Am meisten Spaß hat die Detailarbeit gemacht, etwa die kleine Animation beim Reservieren.

## Technik

```
Frontend    Next.js 16, React 19, Tailwind CSS 4
Daten       Vercel Postgres, Prisma 6
Abgleich    täglicher Cron über eine geschützte API-Route
```

Für ein Projekt dieser Größe wollte ich möglichst wenig Reibung. Die Datenbank ist mit einem Klick angelegt, Prisma kümmert sich um Client und Migrationen, und Next.js bringt API-Routen und Server Components gleich mit.
