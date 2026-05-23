---
aside: true
---

# Stoistic Forge

**KI-Blog · Java/Quarkus · Claude · Fal.ai · [stoistic-forge.de](https://stoistic-forge.de)**

Stoistic Forge ist ein Blog, der täglich neue Artikel über die stoische Philosophie veröffentlicht. Die Artikel werden vollständig von einem Pipeline-System geschrieben, das ich selbst gebaut habe. Themen aus dem antiken Stoizismus, übersetzt in eine Sprache, die heute noch trägt: was Epiktet, Marc Aurel oder Seneca dazu gesagt hätten, wie man mit Rückschlägen umgeht, wie man unter Druck klar bleibt, wie man die Dinge, die nicht in der eigenen Hand liegen, loslässt.

Der Blog läuft seit dem Start vollständig automatisiert. Ich habe ihn nie aktiv mit eigenen Artikeln befüllt. Was dort steht, ist das Ergebnis eines mehrstufigen Generierungs- und Prüfprozesses, der zweimal am Tag ohne mein Zutun durchläuft.

## Warum dieses Projekt

Die stoische Philosophie hat mich persönlich schon länger interessiert, lange bevor ich angefangen habe darüber Software zu bauen. Die Texte von Marc Aurel sind sehr kurz, sehr direkt, und sie sprechen über Probleme, die heute genau so existieren. Was mich gestört hat, war die Lücke zwischen den klassischen Quellen und dem, was online unter dem Label "Stoizismus" kursiert. Vieles davon ist verkürzte Lebensberatung mit antikem Anstrich.

Mir ging es um eine andere Frage. Wenn man die Methoden moderner Sprachmodelle ernst nimmt, kann man sie nutzen, um auf einem soliden Fundament aus Originaltexten täglich neue, eigene Artikel zu schreiben, ohne dass jeder Beitrag ein wortwörtlich abgeschriebenes Zitat sein muss. Voraussetzung ist eine Pipeline, die die Generierung nicht einfach laufen lässt, sondern jeden Artikel kontrolliert, bewertet und gegebenenfalls verwirft.

Stoistic Forge ist die Antwort darauf. Ein KI-System, das gut genug ist, um Inhalte zu produzieren, die ich mit gutem Gewissen veröffentlichen kann. Mit klar definierten Stufen, an denen ich an jeder Stelle weiß, was passiert und warum.

## Die tägliche Pipeline

Zweimal am Tag, um 06:00 und um 15:00 mitteleuropäischer Zeit, startet ein Scheduler die Pipeline. Sie besteht aus fünf Stufen, die nacheinander durchlaufen werden. Wenn eine Stufe scheitert, wird der Lauf abgebrochen und in einem Generation-Log dokumentiert. Erfolgreiche Läufe produzieren einen vollständigen Artikel mit Bild und triggern einen Vercel Deploy Hook, der das Frontend neu baut.

**Stufe 1: TopicSelectionAgent.** Wählt das Thema des Artikels aus. Modell ist Claude Haiku, weil die Aufgabe kompakt ist und kein tiefes Sprachverständnis braucht. Der Agent bekommt eine Liste schon veröffentlichter Themen, die aktuelle Themenkategorien und ein paar Hinweise zur gewünschten Bandbreite und entscheidet daraus, worüber als nächstes geschrieben wird. Ergebnis ist ein strukturierter Vorschlag mit Thema, Untertitel und Kategorie.

**Stufe 2: ArticleGenerationAgent.** Schreibt den Artikel. Hier kommt Claude Sonnet zum Einsatz, weil die Aufgabe sprachlich anspruchsvoll ist. Der Agent bekommt das Thema aus Stufe 1, eine umfangreiche Styleguide-Konfiguration und Ausschnitte aus den Originaltexten, falls sie thematisch passen. Ausgabe ist ein vollständiger Artikel im definierten Format mit Einleitung, Hauptteil und einer kurzen Schlussfolgerung.

**Stufe 3: QualityReviewAgent.** Bewertet den Artikel auf vorher festgelegte Kriterien. Inhaltliche Treue zur stoischen Lehre, sprachliche Qualität, Vermeidung typischer Schwachstellen wie leerer Floskeln oder Wiederholungen, Länge im akzeptierten Bereich. Modell ist erneut Sonnet. Wenn der Review fehlschlägt, wird Stufe 2 erneut angesteuert, maximal dreimal. Schlägt auch der dritte Versuch fehl, bricht der Lauf ab und der Tag bekommt keinen Artikel.

**Stufe 4: ImageGenerationService.** Erzeugt das Titelbild über Fal.ai mit dem Modell Flux Schnell. Der Prompt wird aus dem Artikel abgeleitet und so formuliert, dass die Bildsprache zur stoischen Bildwelt passt. Antike Säulen, klassische Skulpturen, ruhige Landschaften, gedeckte Farben. Die Bilder werden direkt von Fal.ai gehostet und im Artikel über deren CDN ausgeliefert.

**Stufe 5: Publish und Notify.** Der Artikel landet in der PostgreSQL-Datenbank, der Vercel Deploy Hook wird ausgelöst und das Frontend baut sich neu. Parallel geht eine Push-Benachrichtigung über ntfy.sh raus, sodass ich auf dem Mobiltelefon sehe, dass die Pipeline durchgelaufen ist. Die ntfy-Nachricht enthält den Titel des frisch veröffentlichten Artikels und einen direkten Link.

## Wöchentliche Verbesserungs-Agenten

Neben der täglichen Artikelproduktion läuft jeden Montag um 04:00 ein zweiter Scheduler. Hier geht es nicht um neue Inhalte, sondern um die Verbesserung des Systems selbst. Vier Agenten arbeiten dort der Reihe nach:

Der **ImprovementAgent** analysiert die Quality-Reviews der vergangenen Woche und sucht nach Mustern. Welche Arten von Schwachstellen tauchen wiederholt auf? Welche Themen führen häufig zu Retries? Aus diesen Beobachtungen formuliert er konkrete Vorschläge zur Aktualisierung der Style-Konfiguration. Die Vorschläge werden gespeichert und können beim nächsten Lauf angewendet werden.

Der **SchemaProposalAgent** macht etwas Ähnliches, aber für die Datenbankstruktur. Wenn neue Inhaltstypen oder Metadaten sinnvoll wären, schlägt er Schema-Änderungen vor. Die Vorschläge sind reine Empfehlungen und werden nicht automatisch angewendet.

Der **HomepageAgent** kuratiert die Startseite. Welche Artikel der vergangenen Wochen sollten in der Featured-Section sichtbar sein? Diese Entscheidung trifft der Agent anhand der Qualitätsbewertungen, der Themenverteilung und einer einfachen Heuristik zur Abwechslung. Der Agent läuft zusätzlich noch täglich um 07:30, nach dem morgendlichen Artikel.

Der **PromptAgent** experimentiert mit kontrollierten Variationen der Prompts. Er nimmt einen bestehenden Prompt, formuliert eine alternative Version, und legt fest, wie viele Läufe diese Variante getestet werden soll. Die Ergebnisse fließen anschließend in die Bewertung zurück, wodurch sich über die Wochen eine Art A/B-Testing-Logik für die Prompts ergibt.

Zusätzlich läuft jeden Sonntag um 20:00 ein **ReportAgent**, der einen HTML-Bericht über die Woche zusammenstellt und per Email an mich schickt. Welche Artikel sind erschienen, wie sahen die Qualitätsbewertungen aus, gab es Pipeline-Fehler, wie ist das Verhältnis zwischen erfolgreichen und fehlgeschlagenen Läufen.

## Technischer Aufbau

Das Backend ist eine Quarkus-Anwendung in Java 21. Quarkus statt Spring Boot war eine bewusste Wahl. Ich wollte einen modernen Java-Stack ausprobieren, der den schnellen Start und den geringen Speicherverbrauch zum Designziel hat. Für einen langlaufenden Service auf einem kleinen Hetzner-Server zahlt sich das aus. Die Anwendung wird als Uber-Jar gebaut und über systemd direkt auf der Maschine betrieben, ohne Docker dazwischen. Das ist bewusst minimal gehalten.

Die Datenbank ist PostgreSQL, die Migrationen laufen über Flyway. Tabellen für Themen, Kategorien, Artikel, Quality-Reviews, AI-Konfiguration und ein Generation-Log, in dem jeder Pipeline-Lauf protokolliert wird. Eine zweite Migration kam später dazu, als die Featured-Logik und das Prompt-Experiment-Modul gebaut wurden.

Für die KI-Aufrufe nutze ich die Anthropic-API direkt, ohne Zwischenschicht. Haiku und Sonnet werden je nach Aufgabe gezielt eingesetzt. Bildgenerierung läuft über Fal.ai mit Flux Schnell, dem schnellen Modell der Flux-Familie. Die Wahl fiel auf Fal, weil die Latenz dort niedrig ist und das Preismodell bei meinem Volumen vertretbar bleibt.

Push-Benachrichtigungen gehen über ntfy.sh, einen self-hostable Notification-Service. Mein eigener Endpoint, kein API-Key, kein Datenleck. Email-Reports gehen über GMX-SMTP, weil ich dort sowieso einen Account habe und kein separater Mail-Provider nötig ist.

Der Scheduler ist der Quarkus-eigene Scheduler, der intern auf Quartz aufsetzt. Cron-Expressions für die Pipeline-Läufe, einfacher als ein eigener Job-Runner.

Das Frontend ist eine eigene VitePress-Anwendung in Vue 3. Sie liest die Artikel aus der Datenbank über eine REST-API des Backends und wird nach jedem neuen Artikel über den Vercel Deploy Hook neu gebaut. So bleibt die ausgelieferte Seite vollständig statisch, mit allen Performance-Vorteilen einer SSG-Lösung, während die Inhaltsverwaltung dynamisch über die Datenbank läuft.

## Deployment

Das Backend läuft auf einem Hetzner-Server mit zwei systemd-Services, einer für Produktion, einer für Staging. Ein Caddy davor terminiert TLS und leitet API-Anfragen an localhost:8080 weiter. Die Verwaltungs-Endpunkte unter `/q/*` sind absichtlich nicht öffentlich, sie sind nur über SSH erreichbar.

Deployment passiert über GitHub Actions. Push auf den Main-Branch deployt die Produktion, Push auf Staging deployt die Staging-Umgebung. Die Pipeline baut das Uber-Jar, kopiert es per SSH auf den Server, tauscht das alte Jar aus und startet den systemd-Service neu. Das funktioniert seit dem ersten Tag verlässlich und braucht keine Anpassungen mehr.

## Was Stoistic Forge zeigt

Das Projekt ist mein bisher größtes Experiment zur Frage, wie weit man eine inhaltliche Aufgabe an ein KI-System delegieren kann, ohne die Qualität aus der Hand zu geben. Die Antwort, die sich über die Monate Betrieb herauskristallisiert hat: weiter als ich anfangs gedacht hätte, wenn man bereit ist, in die Architektur zu investieren.

Eine einzige Anfrage an ein Sprachmodell produziert in den meisten Fällen einen brauchbaren Artikel. Aber wenn man tagein, tagaus Inhalte veröffentlicht, reicht "in den meisten Fällen" nicht. Die Pipeline mit Quality-Review, Retry-Logik und wöchentlicher Selbstverbesserung gibt mir das Vertrauen, das System wirklich automatisch laufen zu lassen. Ich schaue regelmäßig auf die wöchentlichen Reports, lese stichprobenartig Artikel und korrigiere nur in den Style-Konfigurationen, wenn etwas systematisch nicht passt. Den Rest macht das System.

Was die stoische Philosophie selbst angeht, ist das Projekt für mich eine angenehme Konstante geworden. Jeden Morgen, wenn ich auf das Handy schaue, sehe ich die ntfy-Nachricht mit dem aktuellen Artikeltitel. Manchmal lese ich den Artikel, manchmal nur den Titel. Allein die Erinnerung daran, dass es diese Denkweise gibt, ist im Alltag wertvoll.

---

[stoistic-forge.de](https://stoistic-forge.de){.cv-download-link}
