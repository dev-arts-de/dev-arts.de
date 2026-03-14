---
aside: true
---

# Bewerber-Schmiede

**Web-Anwendung · In Betrieb · [bewerber-schmiede.de](https://bewerber-schmiede.de)**

Bewerber-Schmiede ist ein Tool, mit dem man Lebensläufe analysieren kann. Wer seinen Lebenslauf einreicht, bekommt strukturiertes Feedback zu Vollständigkeit, Formulierungen, häufigen Schwachstellen und konkreten Verbesserungsvorschlägen. Das Ziel: nicht eine allgemeine Kritik, sondern spezifische, handlungsrelevante Hinweise.

## Der Hintergrund

Die Idee entstand aus Gesprächen. Wer Freunde oder Bekannte bei der Jobsuche unterstützt, gibt immer wieder ähnliche Hinweise: Fehlende Quantifizierungen bei Leistungen, zu generische Formulierungen, unklare Zeiträume, fehlende Keywords für Recruiter-Screening-Systeme. Das ist kein Spezialistenwissen, aber es ist Wissen, das nicht überall gleich zugänglich ist. Ein Tool, das das systematisch und sofort liefert, hat einen praktischen Wert.

## Warum dieses Projekt besonders ist

Bewerber-Schmiede ist in erster Linie ein technisches Experiment – aber eines mit ernstem Charakter. Ich habe dieses Projekt vollständig mit Claude Code als Entwicklungspartner gebaut. Das bedeutet nicht, dass eine KI den Code geschrieben und ich nur zugeschaut habe. Es bedeutet, dass ich mit einem KI-Werkzeug gearbeitet habe, das in der Lage ist, Code zu verstehen, Entscheidungen zu besprechen, Refactoring-Vorschläge zu machen und Fehler zu finden – und dass ich diesen Workflow konsequent auf das gesamte Projekt angewendet habe, von der ersten Zeile bis zum Deployment.

Das hat meine Arbeitsweise verändert. Nicht in dem Sinne, dass ich jetzt weniger denke – im Gegenteil. Die Auseinandersetzung mit einem Werkzeug, das Gegenvorschläge macht und Begründungen einfordert, hat mich dazu gebracht, Entscheidungen expliziter zu machen als ich es alleine getan hätte. Warum diese Architektur? Warum dieser Trade-off? Warum jetzt Feature A und nicht Feature B? Diese Fragen muss man beantworten können, wenn man mit einem Werkzeug arbeitet, das sie stellt.

## Entwicklung und Infrastruktur

Das Besondere an Bewerber-Schmiede aus technischer Sicht ist nicht die Anwendung selbst, sondern wie sie gebaut und betrieben wird. Von Anfang an mit dem Anspruch, dass dieses Projekt die Qualitätsstandards erfüllt, die ich auch an berufliche Projekte anlege.

**CI/CD-Pipeline.** Jede Änderung, die auf den Hauptzweig gepusht wird, durchläuft automatisch eine Build-Pipeline. Kein manuelles Deployment, keine "ich deploye das nachher mal"-Mentalität. Die Pipeline prüft, baut und deployt – oder schlägt mit einer klaren Fehlermeldung fehl.

**Automatisierte Unit-Tests.** Die Geschäftslogik ist durch Unit-Tests abgedeckt. Nicht flächendeckend nach Prozentsatz optimiert, sondern durchdacht: die Teile, die wahrscheinlich brechen, sind getestet. Die Teile, bei denen ein Test mehr Aufwand als Nutzen wäre, sind dokumentiert.

**End-to-End-Tests.** Über die Unit-Tests hinaus gibt es End-to-End-Tests, die die gesamte Anwendung aus Nutzerperspektive testen. Formular ausfüllen, Analyse auslösen, Ergebnis prüfen. Das fängt Fehler, die in isolierten Tests unsichtbar bleiben.

**Automatisiertes Deployment.** Nach erfolgreich durchlaufenen Tests wird automatisch deployed. Kein manueller Eingriff, keine SSH-Session auf dem Server.

## Was ich daraus gelernt habe

Zwei Dinge haben mich bei diesem Projekt überrascht.

Das erste: Wie viel Disziplin es braucht, auch bei einem Nebenprojekt ohne externe Deadline konsequent auf Qualität zu bestehen. Es ist verlockend, für ein kleines Nebenprojekt den CI/CD-Aufwand als Überengineering zu betrachten und einfach manuell zu deployen. Ich habe das bewusst nicht getan – und bin froh darüber. Die Pipeline hat mir mehrfach Fehler gezeigt, die ich ohne sie in Produktion gepusht hätte.

Das zweite: Die KI-gestützte Entwicklung mit Claude Code ist kein Gimmick. Es ist ein echter Wandel in der Arbeitsweise, vergleichbar damit, wie das Aufkommen guter Linters und Formatter die Codequalität in der Breite verändert hat. Wer lernt wie man mit diesem Werkzeug arbeitet – nicht als Abkürzung, sondern als Gesprächspartner – verändert seine Entwicklungsgeschwindigkeit und seine Codequalität gleichzeitig.

---

[Zur Bewerber-Schmiede](https://bewerber-schmiede.de){.cv-download-link}
