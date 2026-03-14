---
aside: true
---

# DailyDev

**VitePress-Anwendung · Selbst gehostet auf Raspberry Pi · [jscope.dev-arts.de](https://jscope.dev-arts.de)**

DailyDev ist ein persönliches Lernsystem. Es besteht aus einer VitePress-Anwendung mit 584 ausgearbeiteten Themen rund um Softwareentwicklung und einer automatisierten Pipeline, die mir täglich einen Beitrag auf das Mobiltelefon sendet. Das System läuft auf einem Raspberry Pi in meinem Heimnetzwerk und ist vollständig selbst verwaltet.

## Die Idee dahinter

Softwareentwicklung ist ein Feld, in dem das Lernen nicht aufhört. Es ist nicht wie das Auswendiglernen eines endlichen Lehrstoffes – die Grundlagen sind stabil, aber die Anwendungen, Muster und besten Praktiken entwickeln sich weiter. Wer aufhört zu lernen, wird nicht schlechter in dem was er kann. Er wird langsam irrelevant für das, was kommt.

Gleichzeitig ist aktives Lernen in einem vollen Alltag schwer. Abends nach einem langen Arbeitstag ein Fachbuch aufzuschlagen klingt gut in der Theorie. In der Praxis läuft es oft auf das Scrollen durch irgendwas anderes hinaus. Ich wollte einen Weg finden, strukturiertes Lernen so in den Alltag zu integrieren, dass es tatsächlich passiert – nicht nur geplant ist.

Die Antwort: ein System, das mir Arbeit abnimmt. Ich muss nicht entscheiden, was ich heute lerne. Das System entscheidet das. Jeden Morgen bekomme ich einen Beitrag. Den lese ich, denke kurz nach, beantworte die Fragen. Zehn bis zwanzig Minuten. Dann ist der Tag gelaufen und das Lernen ist passiert.

## Die 584 Themen

Die 584 Themen sind kein zufälliger Stapel. Sie sind das Ergebnis einer systematischen Strukturierung dessen, was ich für einen vollständig ausgebildeten Softwareentwickler für relevant halte. Grob kategorisiert:

**Java und die JVM.** Nicht das Standard-Tutorial-Wissen, sondern Tiefe: Garbage Collection, Classloader, Bytecode-Optimierungen, Concurrency-Modelle, die tatsächlichen Unterschiede zwischen Java-Versionen von 8 bis 21.

**Designmuster.** Alle klassischen GoF-Muster, dazu moderne Patterns aus der Enterprise-Entwicklung, Muster aus Domain-Driven Design, und die wichtige Frage, wann ein Muster angemessen ist und wann es Überengineering darstellt.

**Datenbankkonzepte.** Transaktionsisolation, Indexstrategien, Normalisierung und Denormalisierung, Query-Optimierung, CAP-Theorem und dessen praktische Implikationen. Theorie die unmittelbar in die tägliche Arbeit einfließt.

**Softwarearchitektur.** Microservices versus Monolith, hexagonale Architektur, CQRS, Event Sourcing, die Frage welches Muster wann passt und warum die Antwort fast immer "es kommt darauf an" ist.

**Algorithmen und Datenstrukturen.** Nicht als akademische Übung, sondern mit Fokus auf Situationen, in denen die Wahl der richtigen Struktur einen Unterschied macht. Wann ist ein HashMap die falsche Wahl? Wann zahlt sich eine Baumstruktur aus?

**Clean Code und Handwerk.** SOLID, DRY, KISS – aber auch die Grenzen dieser Prinzipien. Tests, Teststrategien, was gute Tests von schlechten unterscheidet. Commit-Konventionen, Code-Reviews, die Frage wie Teams über Code sprechen können.

**Betrieb und Infrastruktur.** Docker, CI/CD-Konzepte, Linux-Grundlagen für Entwickler, Observability, Logging-Strategien, was man wissen sollte wenn die eigene Software auf einem Server läuft den man nicht anfassen kann.

## Technische Umsetzung

DailyDev ist auf VitePress aufgebaut – und das nicht zufällig. VitePress ist das Framework, auf dem auch dieses Portfolio läuft, und ich wollte es vollständig verstehen. Das bedeutet: nicht nur die Grundfunktionen nutzen, sondern alle Facetten ausschöpfen.

Das System nutzt ein **Custom Theme** mit einer auf Lesbarkeit optimierten Typografie. Lange Texte, oft mit Codebeispielen, verlangen eine andere Darstellung als eine Standard-Dokumentationsseite.

Die **automatisierte Build-Pipeline** läuft auf dem Raspberry Pi selbst: ein einfacher Cron-Job, der täglich den aktuellen Beitrag aus einem Queue-System zieht, die Seite neu baut und benachrichtigt. Die Benachrichtigung erfolgt über einen Push-Dienst direkt auf das Mobiltelefon – kein E-Mail, kein separates App-Login.

Die **statische Suche** von VitePress ist vollständig konfiguriert und indexiert alle 584 Themen. Das ermöglicht es, bei Bedarf gezielt nach einem Konzept zu suchen statt auf den täglichen Beitrag zu warten.

Interaktive **Vue-Komponenten** für die Selbsttests: Multiple-Choice-Fragen zu jedem Thema, Code-Snippets die erklärt werden wollen, kleine Übungen die direkt im Browser lösbar sind. VitePress erlaubt Vue-Komponenten direkt in Markdown – das nutze ich konsequent.

## Was ich davon hatte

Nach einigen Monaten mit DailyDev hat sich etwas verändert – aber nicht das, was ich erwartet hatte. Ich bin kein anderer Entwickler geworden, weil ich 584 Themen durch hatte. Ich bin ein bewussterer Entwickler geworden, weil ich täglich gezwungen war, Konzepte zu artikulieren, die ich vorher benutzt hatte ohne sie wirklich erklärt zu haben. Es gibt einen Unterschied zwischen "ich weiß wie das funktioniert" und "ich kann jemandem erklären wie das funktioniert". DailyDev hat mir gezeigt, wo dieser Unterschied bei mir lag.

Das Raspberry-Pi-Setup hat mir außerdem etwas beigebracht, das im regulären Entwickleralltag seltener vorkommt: die tatsächliche Administration einer laufenden Anwendung auf einem echten System. Nicht Kubernetes, nicht Managed Services – ein kleiner Rechner unter dem Schreibtisch, der läuft. Wenn er nicht läuft, kümmere ich mich darum. Das ist eine andere Art Verantwortung als das Schreiben von Code. Auf demselben Gerät läuft übrigens auch ein weiteres Experiment: [daily-pi-poetry](/projekte/daily-pi-poetry), ein lokales Sprachmodell das täglich ein kurzes Gedicht generiert.

---

[jscope.dev-arts.de](https://jscope.dev-arts.de){.cv-download-link}
