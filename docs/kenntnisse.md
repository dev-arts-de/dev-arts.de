---
title: Kenntnisse
description: Womit Arthur Schimpf arbeitet, wo er es eingesetzt hat und wie tief das Wissen geht.
aside: true
---

# Kenntnisse

<p class="lead">Keine Balken und keine Sterne. Hier steht, womit ich gearbeitet habe, in welchem Projekt und wie sicher ich mich darin fühle.</p>

<dl class="stack-summary">
  <div>
    <dt>Täglich</dt>
    <dd>Java, Spring Boot, PostgreSQL, Docker, GitHub Actions, GitLab CI</dd>
  </div>
  <div>
    <dt>Regelmäßig</dt>
    <dd>Quarkus, Kafka, Angular, Vue.js, TypeScript, Testcontainers, Flyway</dd>
  </div>
  <div>
    <dt>In eigenen Projekten</dt>
    <dd>Kotlin, Next.js, Python, Swift, Elixir, Kubernetes im Betrieb</dd>
  </div>
</dl>

## Java und Spring

Java ist die Sprache, in der ich am sichersten bin. Ich habe in Codebases von Java 8 bis Java 21 gearbeitet. Bei Hellmann haben wir das Domänenmodell konsequent mit Records gebaut, weil sie unveränderlich sind und im Code sofort zeigen, was ein Wert ist und was eine Entität.

Spring Boot setze ich seit der Ausbildung ein, zuletzt in Version 3. Spring MVC für REST-APIs mit Validierung und einheitlicher Fehlerbehandlung, Spring Data JPA mit Hibernate für die Persistenz, Spring Security für OAuth2, JWT und zustandslose APIs. Spring AI habe ich bei der Infokom für eine interne Chat-Anwendung verwendet, als das Modul noch sehr jung war und man vieles im Quellcode nachlesen musste.

Für eigene Dienste nehme ich inzwischen oft Quarkus. Die beiden KI-Pipelines hinter [Stoistic Forge](/projekte/stoistic-forge) und [9thbit](/projekte/9thbit) laufen als Quarkus-Uber-Jar unter systemd auf einem kleinen Server. Kurze Startzeit und wenig Speicher spielen da eine größere Rolle als im Konzernumfeld.

## Datenbanken

PostgreSQL ist meine Standarddatenbank, beruflich wie privat. Ich entwerfe Schemas selbst, schreibe SQL direkt, wenn das ORM an seine Grenzen kommt. Beim Notfallpass speichere ich die Passdaten bewusst als JSONB-Dokument, weil sich ihr Aufbau noch ändert und die API sie nur als Ganzes liest und schreibt.

Schemaänderungen laufen bei mir immer über versionierte Migrationen, meistens mit Flyway, in TypeScript-Projekten mit Drizzle. Geschäftslogik gehört für mich in den Anwendungscode und nicht in Stored Procedures oder Trigger, weil sie dort schwer zu testen und zu versionieren ist.

MySQL kenne ich aus der Praxis. Für kleine Werkzeuge nehme ich SQLite, in Node inzwischen über das eingebaute `node:sqlite`. CockroachDB habe ich bei der Infokom in der Konzeption einer Migration kennengelernt, zusammen mit Leuten von Cockroach Labs. Das ist Wissen über das Konzept und die Konsistenzmodelle, nicht über den Betrieb.

## Kafka

Kafka habe ich in zwei Produktivsystemen eingesetzt. Bei der Infokom kamen eingehende E-Rechnungen über Kafka-Topics ins System und wurden dort validiert und verarbeitet. Bei Hellmann hat Kafka die Extraktion aus dem AS400 von der Validierung und dem Import ins neue Modell entkoppelt.

Ich habe Producer und Consumer konfiguriert, mit Consumer Groups gearbeitet und mich mit Offsets, Partitionierung, Retries und idempotenter Verarbeitung beschäftigt, weil At-least-once-Delivery sonst doppelte Datensätze erzeugt. Einen Kafka-Cluster administriert habe ich nicht.

## Frontend

Ich bin Backend-Entwickler, baue aber regelmäßig Oberflächen. Angular habe ich bei Hellmann im Team eingesetzt und für den [Notfallpass](/projekte/dein-notruf) mit Angular 19, Standalone Components und Signals ein komplettes Frontend gebaut. Vue.js nutze ich seit Jahren, unter anderem für diese Seite und andere VitePress-Projekte.

Vaadin ist das Framework, mit dem ich am längsten zusammenhängend gearbeitet habe: die komplette Rechnungsanwendung bei der Infokom, von Version 21 bis 25, mit großen Data Grids, Formularen und Dialogen. Für interne Fachanwendungen auf Java-Basis ist das sehr produktiv. React und Next.js verwende ich für Kundenwebsites und eigene Werkzeuge, mit App Router und Server Components.

## Testing

Ich teste die Stellen, an denen Fehler teuer werden: Berechnungen, Zustandsübergänge, Schnittstellen. Unit-Tests mit JUnit 5 und Mockito, Integrationstests mit Testcontainers gegen eine echte PostgreSQL statt gegen H2, weil sich beide an genug Stellen unterschiedlich verhalten. In TypeScript-Projekten nehme ich Vitest und für End-to-End-Tests Playwright. In quitt, meiner Rechnungs-App, prüfe ich Geldbeträge und Rechnungssummen zusätzlich mit Property-based Tests über fast-check, weil Rundungsfehler bei Rechnungen sonst erst beim Steuerberater auffallen.

## CI/CD und Betrieb

Das ist der Bereich, in dem ich seit Mai 2026 hauptberuflich arbeite, und der mich auch privat am meisten beschäftigt.

Mit GitLab CI habe ich bei der Infokom Pipelines von Grund auf geschrieben: Stages für Test, Build und Deployment, Abhängigkeiten zwischen Jobs, Variablen pro Umgebung. Azure DevOps und Jenkins kenne ich aus bestehenden Projekten. Für meine eigenen Projekte nutze ich GitHub Actions mit einem wiederverwendbaren Workflow, den die einzelnen App-Repositories aufrufen.

Meine Dienste laufen auf drei Hetzner-Servern, die ich selbst einrichte und pflege. Images werden ausschließlich in der CI gebaut und in die GitHub Container Registry geschoben, auf den Servern wird nur gezogen und gestartet. Ein Deploy prüft danach einen Healthcheck und setzt bei einem Fehler automatisch auf die vorherige Version zurück. Davor sitzt Caddy als Reverse Proxy mit automatischen Zertifikaten. Einzelne Java-Dienste laufen bewusst ohne Container direkt unter systemd. Wie das im Detail aussieht, steht auf der Seite zur [Infrastruktur](/projekte/infrastruktur).

Docker nutze ich jeden Tag: eigene Dockerfiles mit Multi-Stage-Builds, Compose-Umgebungen mit Datenbank und Broker für die lokale Entwicklung, schlanke Laufzeit-Images. Kubernetes habe ich im Betrieb bestehender Anwendungen erlebt und dort Deployments und Konfigurationen angepasst. Einen Cluster von Grund auf entworfen habe ich noch nicht.

## Arbeiten mit KI

Ich nutze Sprachmodelle auf zwei Arten. Als Baustein in Anwendungen: Die Blog-Pipelines rufen die Claude-API in mehreren Stufen auf, mit einem eigenen Review-Schritt, der schwache Ergebnisse verwirft. [Fundus](/projekte/fundus) ordnet Dokumente mit Claude ein und stellt sein Archiv über einen MCP-Server mit OAuth und Zwei-Faktor-Anmeldung bereit.

Und als Werkzeug beim Entwickeln: Viele meiner Projekte entstehen mit Claude Code. Ich schreibe vorher einen Plan mit Arbeitspaketen und Abnahmekriterien, lasse umsetzen und lese das Ergebnis wie einen Pull Request. Damit das funktioniert, müssen Tests, Linter und Pipeline streng sein. Je weniger ich selbst tippe, desto wichtiger werden sie.

## Weitere Sprachen

Kotlin habe ich mir mit der zweiten Version von TinyBill beigebracht, einer Spring-Boot-API in Kotlin. TypeScript schreibe ich für Frontends und kleine Node-Dienste. Python nutze ich für Fundus. Swift und SwiftUI für die iOS-Apps zum Notfallpass und zu Arcane Spire, Jetpack Compose für dessen Android-Port. Elixir mit Phoenix LiveView habe ich in einem kleinen Erinnerungsdienst ausprobiert, vor allem wegen des Prozessmodells mit einem GenServer pro Aufgabe. In diesen Sprachen bin ich produktiv, aber nicht so sicher wie in Java.

## Werkzeuge

IntelliJ IDEA seit dem ersten Tag der Ausbildung, macOS als Arbeitsrechner, Linux auf den Servern. GitLab und GitHub, Jira für Tickets und Sprints, Miro für Architekturskizzen in Workshops. Für API-Verträge OpenAPI, das ich bei Hellmann vor der Implementierung geschrieben habe, damit beide Seiten früh über dieselbe Schnittstelle reden.
