---
title: 9thbit
description: Ein technischer Blog mit täglichen Artikeln zu Java-Grundlagen, objektorientiertem Design und Interviewfragen, erzeugt von derselben Pipeline-Architektur wie Stoistic Forge.
gruppe: aktuell
order: 5
zeitraum: seit April 2026
status: Online, Entwicklung pausiert
technik: [Java, Quarkus, PostgreSQL, Flyway, Quartz, Claude API, VitePress, Vue]
link: { href: 'https://www.9thbit.de', text: '9thbit.de' }
aside: false
---

## Worum es geht

9thbit veröffentlicht Artikel zu den Themen, die einem als Java-Entwickler immer wieder begegnen: Vererbung und Komposition, `equals` und `hashCode`, das Liskov-Prinzip, Generics zur Laufzeit, Speichermodell und Garbage Collection. Die Artikel richten sich an Leute, die ihre Grundlagen auffrischen wollen, etwa vor einem technischen Interview. Jeder hat einen Schwierigkeitsgrad und eine geschätzte Lesezeit.

Der Name kommt vom neunten Bit. Ein Byte hat acht. Das neunte steht für den Unterschied zwischen „kann ich erklären“ und „habe ich verstanden“.

## Warum ein zweiter Blog

9thbit ist parallel zu [Stoistic Forge](/projekte/stoistic-forge) entstanden. Ich wollte wissen, ob dieselbe Pipeline auch bei einem technischen Thema trägt. Bei Philosophie fällt eine ungenaue Formulierung kaum auf. Bei Java fällt eine falsche Aussage über das Verhalten einer bestimmten Version sofort auf, und Codebeispiele müssen kompilieren.

## Was anders ist

Die Grundstufen sind dieselben: Themenwahl, Generierung, Review mit bis zu drei Versuchen, Veröffentlichung. Angepasst habe ich drei Stellen:

- Die Themenwahl folgt einer von mir kuratierten Roadmap, statt frei aus der Themenliste zu wählen.
- Der Styleguide verlangt konkrete Codebeispiele und verbietet lange Einleitungen.
- Der Review prüft zusätzlich, ob der Code syntaktisch stimmt und ob die Aussagen über das Sprachverhalten korrekt sind.

```
L1  Interview-Grundlagen    Konstruktoren, equals/hashCode, Vererbung oder Komposition
L2  Mit Praxiserfahrung     Speichermodell, volatile, Generics zur Laufzeit, GC
L3  Abwägungen              Sealed Classes, ForkJoinPool und CompletableFuture
```

Statt Push-Nachrichten gibt es einen RSS-Feed, weil Entwickler technische Inhalte eher per Feed abonnieren. Titelbilder gibt es keine, dafür stehen Code und Diagramme direkt im Text.

## Technik

Ein Quarkus-Dienst mit PostgreSQL, Flyway und Quartz für die zeitgesteuerten Läufe. Die Pipeline wird über einen mit Secret geschützten Endpunkt ausgelöst, nach jedem Lauf baut ein Deploy-Hook das VitePress-Frontend neu. Im Mai 2026 habe ich die Stabilität überarbeitet: N+1-Abfragen beim Laden der Artikel über `JOIN FETCH` beseitigt, CORS auf eine feste Liste erlaubter Origins umgestellt und Fehler abgefangen, die vorher außerhalb des inneren Fehlerblocks die ganze Pipeline beendet haben.

## Was ich gelernt habe

Bei Standardthemen sind die Artikel solide. Schwierig wird es in Randbereichen, wo es konkurrierende Konventionen gibt oder eine Aussage nur ab einer bestimmten Java-Version stimmt. Der Review fängt vieles davon ab, aber nicht alles. Bei solchen Themen lese ich nach und schärfe den Styleguide, wenn ich ein Muster sehe.
