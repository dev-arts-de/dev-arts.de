---
aside: true
---

# Technische Kenntnisse

Was hier steht, ist kein Kompetenzraster mit Balken oder Sternchen. Es ist ein ehrlicher Bericht darüber, womit ich gearbeitet habe, wo ich es eingesetzt habe und wie tief das Wissen tatsächlich geht. Manches davon ist tägliches Handwerk, anderes wurde in einem spezifischen Projekt gebraucht und seitdem nicht mehr angefasst. Den Unterschied versuche ich deutlich zu machen.

---

## Java und das Spring-Ökosystem

Java ist die Sprache, in der ich professionell denke. Ich habe mit allen LTS-Versionen von Java 8 bis Java 21 gearbeitet, nicht in dem Sinne, dass ich jeden API-Unterschied zwischen den Versionen auswendig kennen würde, sondern in dem Sinne, dass ich in Codebases gearbeitet habe, die auf diesen Versionen liefen, und produktiv war. Der bewussteste Einsatz moderner Java-Features passierte bei Hellmann: Dort haben wir Records in der Domänenmodellierung verwendet, was direkt mit dem Clean-Architecture-Ansatz zusammenhing, den das Team verfolgte. Records erzwingen Unveränderlichkeit und machen den Domänencode expliziter. Das war keine Stilentscheidung, sondern eine architektonische.

Spring Boot kenne ich durch und durch im Alltag. Die letzte Version, mit der ich aktiv gearbeitet habe, war Spring Boot 3. Ich könnte nicht spontan auflisten was sich zwischen den Haupt-Releases verändert hat, aber ich arbeite nicht aus dem Gedächtnis, sondern mit dem Ökosystem. Was mich von jemandem unterscheidet, der Spring Boot aus Tutorials kennt: Ich habe damit produktive Systeme gebaut, die echte Nutzer verwenden, und ich weiß was passiert wenn etwas schiefläuft. Ich kenne den Unterschied zwischen dem was ein Framework verspricht und dem was es in der Praxis liefert.

Innerhalb des Spring-Ökosystems habe ich regelmäßig mit Spring MVC und Spring Web gearbeitet: REST-APIs, Controller-Schichten, Exception-Handling, Validierung. Spring Data JPA ist fester Bestandteil jedes meiner Backend-Projekte: Repository-Pattern, Query-Methoden, Transaktionsmanagement. Spring Security setze ich ein wenn Authentifizierung und Autorisierung gebraucht werden: OAuth2, JWT, rollenbasierte Zugriffskontrolle. Einen Sonderfall stellt Spring AI dar: beim InfoGPT-Projekt bei der Infokom, einer internen Chat-Anwendung vergleichbar mit ChatGPT, haben wir Spring AI zur Anbindung der KI-Modelle eingesetzt. Das war zum Zeitpunkt unserer Arbeit ein noch junges Modul, und der Umgang damit erforderte mehr Eigenrecherche als die etablierten Spring-Module, aber es hat funktioniert.

---

## Datenbanken

PostgreSQL ist meine primäre Datenbank. Ich habe sie in nahezu jeder Stelle eingesetzt: bei der Infokom für das komplette Rechnungsverwaltungssystem, bei Hellmann im Zielschema der Migration, in eigenen Projekten wie TinyBill. Ich schreibe SQL direkt wenn das ORM nicht ausreicht, entwerfe Schemas von Grund auf und denke bei der Modellierung mit, welche Abfragen zu erwarten sind. MySQL kenne ich ebenfalls aus der Praxis und bewege mich darin sicher. Die konzeptionellen Unterschiede zur PostgreSQL-Welt sind mir bekannt, auch wenn ich PostgreSQL bevorzuge, wenn die Wahl frei ist.

Für Datenbankmigrationen habe ich mit Flyway gearbeitet. Versionierte SQL-Skripte, saubere Migrationspfade, keine manuellen Änderungen an produktiven Schemata ohne Migrationsdatei, das ist für mich Standard. Das Gegenteil, nämlich Schemaänderungen direkt auf der Datenbank ohne nachvollziehbaren Versionspfad, habe ich einmal in einem Projekt vorgefunden und verstanden warum das ein Problem ist.

Was ich bewusst nicht einsetze: Stored Procedures, Trigger und Views als Ersatz für Anwendungslogik. Das ist eine architektonische Überzeugung, keine technische Unfähigkeit. Logik, die in der Datenbank steckt, ist schwerer zu testen, schwerer zu versionieren und schwerer nachzuvollziehen. Ich halte Geschäftslogik im Anwendungscode und die Datenbank so nah wie sinnvoll an ihrer Kernaufgabe: Daten halten und abfragen.

CockroachDB habe ich im Rahmen des AS400-Migrationsprojekts bei der Infokom konzeptionell kennengelernt. Das Projekt arbeitete eng mit einem Spezialistenteam von CockroachDB selbst zusammen. Mein Wissen darüber ist struktureller Natur: Grundprinzipien der verteilten Datenhaltung, Konsistenzmodelle, warum CockroachDB für diesen Anwendungsfall gewählt wurde. Keine produktive Erfahrung mit dem Betrieb.

---

## Messaging mit Kafka

Kafka habe ich in zwei realen Produktionskontexten eingesetzt. Das ist ein Unterschied zu jemandem, der Kafka aus Tutorials kennt.

Bei der Infokom wurde Kafka für den Empfang eingehender E-Rechnungen verwendet. Externe Rechnungen liefen über Kafka-Topics in das System und wurden dort verarbeitet, validiert und weiterverarbeitet. Das war ein durchgehend asynchroner Prozess, bei dem Fehlerbehandlung, Retry-Logik und Idempotenz echte Überlegungen waren.

Bei Hellmann war Kafka Teil der ETL-Pipeline: Daten wurden aus dem AS400-System extrahiert, über Kafka als Nachrichtenkanal weitergeleitet und dann von unserem Validierungsservice konsumiert, bevor sie ins neue Domänenmodell überführt wurden. Kafka hat dort die Entkopplung zwischen Extraktionsschicht und Verarbeitungsschicht übernommen.

Ich habe Producer- und Consumer-Konfigurationen geschrieben, mit Consumer Groups gearbeitet und verstehe die wesentlichen Konzepte wie Partitionierung, Offsets und At-least-once-Delivery aus der Praxis. Was ich nicht habe, ist tiefes Wissen über Kafka-Administration oder Cluster-Betrieb. Damit hatte ich keinen direkten Kontakt.

---

## Frontend

Vue.js ist das Frontend-Framework, das mich am längsten begleitet hat. Ich habe kurz mit Vue 2 gearbeitet, bin aber schnell auf Vue 3 gewechselt und seitdem dabei. Die Composition API ist für mich der natürlichere Ansatz: Logik nach Zugehörigkeit gruppieren statt nach Lebenszyklusphase. Dieses Portfolio und DailyDev sind beide mit VitePress auf Vue-Basis gebaut, was zeigt, dass das kein aufgewärmtes Wissen aus alten Projekten ist. Für Webanwendungen, die ich nach eigenem Ermessen gestalten kann, wähle ich Vue.

React und Next.js habe ich die letzten zwei Jahre für ausgewählte Projekte genutzt, zuletzt im Kontext von Shopitech-Kundenprojekten und eigenen Experimenten. Die aktuelle Richtung des React-Ökosystems (Server Components, App Router, die Verlagerung von Logik in Richtung Server) habe ich aktiv mitverfolgt und angewendet. Es ist nicht mein tägliches Werkzeug im Beruf, aber ich finde mich sofort zurecht.

Angular habe ich bei Hellmann kennengelernt. Wir haben eine aktuelle Version eingesetzt und ich habe eigenständig Features entwickelt. Angular ist nach Jahren mit Vue und React eine andere Welt: stärker strukturiert, mehr Konventionen, mehr Framework-Meinung über alles. Für Teams mit variierendem Erfahrungsniveau kann das ein echter Vorteil sein. Ich habe dort Wissen aufgebaut und betrachte mich als jemanden mit solider Arbeitspraxis, nicht als jemanden mit ausgewachsener Expertise.

Vaadin ist das Framework, in dem ich die meiste zusammenhängende Erfahrung habe. Von Version 21 bis 25 habe ich damit das komplette ZFWEB-Projekt bei der Infokom aufgebaut: Flow-Komponenten, Data Grids mit tausenden Datensätzen, komplexe Formulare, Dialoge, Layouts, Bindings an Service-Schichten. Vaadin verbindet Java-Backend direkt mit der UI, es gibt keine Trennung zwischen Frontend und Backend im klassischen Sinne. Das macht es für interne Business-Anwendungen auf Java-Basis außergewöhnlich produktiv. Ich kenne die Stärken und die Grenzen dieses Ansatzes aus intensiver Praxis.

---

## Testing

Ich habe mit JUnit 4 und JUnit 5 gearbeitet. Den genauen API-Unterschied zwischen beiden Versionen könnte ich nicht aus dem Gedächtnis reproduzieren, in der Praxis spielt das selten eine Rolle, weil man üblicherweise in einer Codebase ist, die schon eine der Versionen etabliert hat. Wichtiger ist die Herangehensweise: Ich schreibe Tests während der Entwicklung, nicht danach. Ich teste die Teile, die fehleranfällig sind, nicht den Code, der trivial korrekt ist.

Für Integrationstests habe ich intensiv mit Testcontainers gearbeitet. Testcontainers startet echte Datenbankinstanzen, Kafka-Broker oder andere Abhängigkeiten in Docker-Containern für die Laufzeit des Tests und fährt sie danach wieder herunter. Das bedeutet: Integrationstests gegen eine echte PostgreSQL-Instanz, nicht gegen eine eingebettete H2-Datenbank die sich an einigen Stellen anders verhält. Dieser Unterschied ist real und relevant. Bei der Infokom und in eigenen Projekten war Testcontainers fester Bestandteil der Testinfrastruktur.

Browser-basierte End-to-End-Tests mit Playwright habe ich in eigenen Projekten aufgesetzt. Das ist ein Bereich, in dem ich mir Schritt für Schritt mehr aufgebaut habe: Tooling-Entscheidungen, Selektoren, Stabilität von Tests gegen dynamische Inhalte. Ich würde mich hier als kompetent, nicht als erfahren bezeichnen.

---

## Infrastructure und DevOps

GitLab CI ist das CI/CD-System, mit dem ich am meisten gearbeitet habe. Ich habe Pipelines selbst geschrieben und konfiguriert: Stages für Tests, Build, Deployment, Abhängigkeiten zwischen Jobs, Umgebungsvariablen, Deployment in verschiedene Umgebungen. Das ist nicht nur "Pipeline existiert", sondern aktives Gestalten und Pflegen von Lieferprozessen. Azure DevOps kenne ich ebenfalls aus der Praxis, Jenkins habe ich in bestehenden Projekten gesehen und angepasst.

Docker nutze ich täglich in der lokalen Entwicklung. Ich schreibe eigene Dockerfiles für Anwendungen, setze docker-compose Umgebungen auf die Datenbanken, Kafka-Broker und Anwendungen gemeinsam hochfahren, und verstehe was in einem Container passiert wenn etwas schiefläuft. Multi-Stage-Builds habe ich nicht eingesetzt, bisher gab es dafür in meinen Projekten keinen Anlass, aber das Konzept ist mir bekannt.

Kubernetes habe ich im Deployment-Kontext erlebt. Anwendungen wurden auf K8s-Clustern betrieben, ich habe Konfigurationen angepasst und den Betrieb begleitet. Was ich nicht habe: tiefes Wissen über Cluster-Architektur, Netzwerkpolicies oder die Administration eines Clusters selbst. Ich weiß genug um mit K8s-Deployments zu arbeiten, nicht genug um sie von Grund auf zu designen.

---

## Werkzeuge und Umgebung

IntelliJ IDEA ist meine primäre Entwicklungsumgebung, seit dem Beginn meiner Karriere. Ich kenne die Tastaturkürzel, die Refactoring-Werkzeuge, die Datenbankintegration und das Debugging. Eine IDE gut zu kennen ist keine Kleinigkeit: Sie bestimmt, wie schnell man im Code navigiert, wie sicher man refactored und wie effektiv man Fehler findet.

Für API-Design und Dokumentation setze ich OpenAPI ein. Schnittstellen beschreiben, bevor man sie implementiert, hat einen klaren Vorteil: man durchdenkt den Vertrag explizit und nicht erst wenn der Code schon steht. Das habe ich bei Hellmann für die neuen Services praktiziert.

Git-Plattformen: GitLab war mein hauptsächliches Werkzeug im beruflichen Kontext. GitHub nutze ich für eigene Projekte intensiv. Bitbucket kenne ich ebenfalls aus der Praxis. Für Projektorganisation habe ich mit Jira und Miro gearbeitet: Jira für Ticket-Verwaltung und Sprint-Planung, Miro für Architekturdiagramme und technische Workshops.

---

## Betriebssystem

macOS ist mein Betriebssystem, und das seit dem ersten Tag, an dem ich mir selbst etwas leisten konnte. Mit meinem ersten eigenen Geld habe ich mir einen iMac gekauft. Seitdem habe ich nichts anderes mehr benutzt.

Das ist keine ideologische Entscheidung. Es ist eine praktische. macOS und Unix-basierte Systeme sind für Softwareentwicklung gebaut: die Terminal-Umgebung, die Paketverwaltung, das Verhalten des Dateisystems entsprechen dem was auf Servern läuft. Der Übergang zwischen lokalem Rechner und Linux-Server ist fließend, nicht ein ständiges Übersetzen von Systemkonzepten.

Gleichzeitig habe ich Linux nicht nur als entfernte Serverumgebung kennengelernt. Der Raspberry Pi im Heimnetzwerk auf dem DailyDev und daily-pi-poetry laufen, ist ein vollwertiger Linux-Rechner den ich administriere: Prozesse, Cron-Jobs, Logs, Netzwerkkonfiguration. Das ist kein Spielzeug-Setup sondern eine laufende Produktivumgebung unter der Schreibtischplatte.
