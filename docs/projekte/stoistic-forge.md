---
aside: true
---

# Stoistic Forge

**KI-Blog · Java/Quarkus · Claude · Fal.ai · [stoistic-forge.de](https://stoistic-forge.de)**

Stoistic Forge ist ein Blog, der täglich neue Artikel über die stoische Philosophie veröffentlicht. Die Artikel werden vollständig von einem Pipeline-System geschrieben, das ich selbst gebaut habe. Themen aus dem antiken Stoizismus, übersetzt in eine Sprache, die heute noch trägt: was Epiktet, Marc Aurel oder Seneca dazu gesagt hätten, wie man mit Rückschlägen umgeht, wie man unter Druck klar bleibt, wie man die Dinge, die nicht in der eigenen Hand liegen, loslässt.

Der Blog läuft seit dem Start vollständig automatisiert. Ich habe ihn nie aktiv mit eigenen Artikeln befüllt. Was dort steht, ist das Ergebnis eines mehrstufigen Generierungs- und Prüfprozesses, der zweimal am Tag ohne mein Zutun durchläuft.

## Warum dieses Projekt

Die stoische Philosophie hat mich persönlich schon länger interessiert, lange bevor ich angefangen habe darüber Software zu bauen. Die Texte von Marc Aurel sind sehr kurz, sehr direkt, und sie sprechen über Probleme, die heute genau so existieren. Was mich gestört hat, war die Lücke zwischen den klassischen Quellen und dem, was online unter dem Label "Stoizismus" kursiert. Vieles davon ist verkürzte Lebensberatung mit antikem Anstrich.

Stoistic Forge ist mein Versuch, diese Lücke automatisiert zu schließen. Eine Pipeline, die auf der Basis der Originaltexte täglich neue, eigene Artikel schreibt, kontrolliert, bewertet und gegebenenfalls verwirft, ohne dass ich für jeden einzelnen Beitrag eingreifen muss.

## Die tägliche Pipeline

Zweimal am Tag, um 06:00 und um 15:00 mitteleuropäischer Zeit, startet ein Scheduler einen Pipeline-Lauf. Fünf Stufen, jede mit klarem Vertrag. Scheitert eine Stufe, wird der Lauf abgebrochen und im Generation-Log dokumentiert.

```
06:00 / 15:00 CET  →  ArticlePipeline

  1  TopicSelectionAgent       Claude Haiku
  2  ArticleGenerationAgent    Claude Sonnet
  3  QualityReviewAgent        Claude Sonnet · ≤3 Retries
  4  ImageGenerationService    Fal.ai · Flux Schnell
  5  Publish + ntfy + Vercel Deploy Hook
```

**Stufe 1: TopicSelectionAgent.** Wählt das Thema des Tages. Bekommt die Liste schon veröffentlichter Themen und die aktuellen Kategorien und entscheidet daraus, worüber als nächstes geschrieben wird. Haiku reicht, die Aufgabe ist kompakt.

**Stufe 2: ArticleGenerationAgent.** Schreibt den Artikel. Hier läuft Sonnet, weil sprachlich anspruchsvoll. Eingabe sind das Thema aus Stufe 1, der Styleguide und passende Ausschnitte aus den Originaltexten. Ausgabe ist ein vollständiger Artikel mit Einleitung, Hauptteil und kurzer Schlussfolgerung.

**Stufe 3: QualityReviewAgent.** Bewertet den Artikel: Treue zur stoischen Lehre, sprachliche Qualität, Vermeidung leerer Floskeln, Länge im akzeptierten Bereich. Wenn der Review fehlschlägt, geht Stufe 2 erneut los, maximal dreimal. Schlägt auch der dritte Versuch fehl, bekommt der Tag keinen Artikel.

**Stufe 4: ImageGenerationService.** Erzeugt das Titelbild über Fal.ai mit Flux Schnell. Der Prompt wird aus dem Artikel abgeleitet und steuert die Bildsprache: antike Säulen, klassische Skulpturen, ruhige Landschaften, gedeckte Farben.

**Stufe 5: Publish und Notify.** Artikel landet in PostgreSQL, Vercel Deploy Hook löst den Frontend-Rebuild aus. Parallel geht eine ntfy-Push raus mit Titel und Direktlink, damit ich auf dem Handy sehe, dass der Lauf durch ist.

## Wöchentliche Verbesserungs-Agenten

Neben der täglichen Artikelproduktion läuft jeden Montag um 04:00 ein zweiter Scheduler. Hier geht es nicht um neue Inhalte, sondern um die Verbesserung des Systems selbst.

```
Mo 04:00  →  ImprovementAgent        Style-Vorschläge aus Reviews
             SchemaProposalAgent     DB-Schema-Vorschläge
             HomepageAgent           Featured-Section kuratieren
             PromptAgent             Prompt-A/B-Experimente

So 20:00  →  ReportAgent             Wochenbericht per Email
```

Der **ImprovementAgent** analysiert die Quality-Reviews der vergangenen Woche und sucht nach Mustern: Welche Schwachstellen tauchen wiederholt auf? Welche Themen führen häufig zu Retries? Daraus formuliert er Vorschläge zur Aktualisierung der Style-Konfiguration.

Der **SchemaProposalAgent** macht das Gleiche für die Datenbankstruktur. Wenn neue Inhaltstypen oder Metadaten sinnvoll wären, schlägt er Schema-Änderungen vor. Reine Empfehlungen, keine automatische Anwendung.

Der **HomepageAgent** entscheidet, welche Artikel in der Featured-Section sichtbar sind. Anhand der Qualitätsbewertungen, der Themenverteilung und einer einfachen Heuristik zur Abwechslung. Läuft zusätzlich täglich um 07:30, nach dem morgendlichen Artikel.

Der **PromptAgent** experimentiert mit kontrollierten Variationen der Prompts. Eine alternative Formulierung wird über eine festgelegte Zahl von Läufen getestet, die Ergebnisse fließen in die Bewertung zurück. Über die Wochen entsteht so eine Art A/B-Testing für die Prompts selbst.

Sonntags um 20:00 erstellt der **ReportAgent** einen HTML-Wochenbericht und schickt ihn per Email: welche Artikel sind erschienen, wie waren die Bewertungen, gab es Pipeline-Fehler.

## Technischer Aufbau

```
Runtime         Java 21 · Quarkus 3.34 · Uber-Jar
Datenbank       PostgreSQL · Flyway
KI              Anthropic Claude (Haiku, Sonnet) · Fal.ai Flux
Notifications   ntfy.sh (Push) · GMX SMTP (Email-Reports)
Scheduler       Quarkus Scheduler auf Quartz-Basis
Hosting         systemd auf Hetzner · Caddy als Reverse Proxy
Frontend        VitePress + Vue 3 · separates Repo
Deployment      GitHub Actions · main → Produktion · staging → Staging
```

Quarkus statt Spring Boot war eine bewusste Wahl. Schneller Start, geringer Speicherverbrauch, modernes Java-Ökosystem. Für einen langlaufenden Service auf einem kleinen Hetzner-Server zahlt sich das aus. Die Anwendung läuft als Uber-Jar über systemd, ohne Docker dazwischen, bewusst minimal gehalten.

Push-Benachrichtigungen gehen über ntfy.sh: mein eigener Endpoint, kein API-Key, kein Datenleck. Email-Reports über GMX-SMTP, weil ich dort sowieso einen Account habe.

Das Frontend ist eine eigene VitePress-Anwendung. Sie liest Artikel über die REST-API des Backends und wird nach jedem neuen Artikel über den Vercel Deploy Hook neu gebaut. So bleibt die ausgelieferte Seite statisch, während die Inhaltsverwaltung dynamisch über die Datenbank läuft.

## Was ich daraus mitgenommen habe

Eine einzige Anfrage an ein Sprachmodell produziert in den meisten Fällen einen brauchbaren Artikel. Wenn man tagein, tagaus Inhalte veröffentlicht, reicht "in den meisten Fällen" nicht. Die Pipeline mit Quality-Review, Retry-Logik und wöchentlicher Selbstverbesserung ist die Brücke zwischen einem netten Demo-Lauf und einem System, das man tatsächlich automatisch laufen lassen kann. Ich schaue stichprobenartig in Artikel rein und greife nur in die Style-Konfiguration ein, wenn etwas systematisch nicht passt. Den Rest macht das System.

---

[stoistic-forge.de](https://stoistic-forge.de){.cv-download-link}
