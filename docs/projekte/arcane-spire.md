---
title: Arcane Spire
description: Ein Tri-Peaks-Kartenspiel für iPhone, iPad, Mac und Android, mit Tagesrunde und Ranglisten-Duellen gegen andere Spieler.
gruppe: aktuell
order: 3
zeitraum: seit 2026
status: In Entwicklung, Version 0.4
technik: [Swift, SwiftUI, Kotlin, Jetpack Compose, Node.js, SQLite]
aside: false
---

## Worum es geht

Arcane Spire ist ein Solitär-Kartenspiel im Querformat. Auf dem Tisch liegen drei Kartentürme aus 28 Karten, und man räumt sie ab, indem man eine Karte legt, die um eins höher oder tiefer ist als die offene Karte auf dem Stapel. Das Ass zählt in beide Richtungen. Vorbild war ein Tri-Peaks-Spiel, das ich von Spieltischen in Kneipen kenne und das es so nicht fürs Handy gibt.

Es gibt einen klassischen Modus über fünf Runden, einen Death-Race-Modus, in dem ein festgefahrenes Feld den ganzen Lauf beendet, und eine Tagesrunde, in der alle Spieler am selben Tag dasselbe Blatt bekommen. Punkte gibt es für Serien, für Tempo, für gefallene Turmspitzen und für ein komplett abgeräumtes Feld. Jede Runde wird vor dem Austeilen darauf geprüft, ob sie überhaupt lösbar ist.

## Eine Spiellogik, drei Oberflächen

Die Regeln liegen plattformunabhängig in eigenen Modulen für Modelle und Spiellogik, ohne Abhängigkeit zu SwiftUI. Die iOS- und macOS-App teilen sich diesen Kern. Für Android habe ich die Logik eins zu eins nach Kotlin übertragen und die Oberfläche mit Jetpack Compose neu gebaut. Dazu kommt eine Browserfassung. Wenn ich eine Regel ändere, betrifft das also genau eine Stelle pro Sprache, und Replay-Tests auf beiden Seiten sichern ab, dass Swift und Kotlin aus denselben Eingaben dasselbe Ergebnis berechnen.

## Ranked und der Server

Im Ranglistenmodus spielen zwei Spieler fünf Runden mit denselben Karten, aber nicht gleichzeitig. Nach jeder Runde sieht man das Spiel des Gegners im Zeitraffer. Es gibt Ränge von Bronze bis Diamant und darüber Challenger, aufsteigen kann man über Qualifikationsspiele.

Damit niemand Punkte manipulieren kann, schickt die App nur ihre Eingaben an den Server. Der spielt das Duell mit demselben Blatt nach und wertet das Ergebnis selbst aus. Der Server ist ein Node-Dienst ohne ein einziges Paket aus npm: HTTP über `node:http` mit einem kleinen eigenen Router, Daten in `node:sqlite`, Kryptografie aus der Standardbibliothek. Das hält die Angriffsfläche klein, und ein Update ist ein Update von Node selbst.

## Stand

Der letzte Release-Build ist Version 0.4.14 für iOS, macOS und Android. Gerade arbeite ich am Ranked-Modus.
