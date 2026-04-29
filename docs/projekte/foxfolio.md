---
aside: true
---

# Foxfolio

**Portfolio-Generator · Vaadin · Spring Boot · In Entwicklung**

Foxfolio ist die Idee, dass eine Bewerbung keine PDF-Anlage sein muss. Statt Blocktexte in ein StepStone-Profil zu tippen oder einen Lebenslauf in Word-Formatierung zusammenzuhalten, gibt man seine Daten einmal ein – und das System generiert daraus eine vollständige, gehostete Portfolio-Webseite. Entweder unter einer `.foxfolio`-Subdomain oder unter einer eigenen Domain.

Die Domain ist gesichert. Die Idee ist es auch.

## Warum diese Idee

Recruitern fehlt der Kontext. Ein Lebenslauf ist ein komprimiertes Dokument – er sagt wann jemand wo war, aber nicht wie jemand arbeitet, denkt, oder an Probleme herangeht. Eine Portfolio-Webseite kann das leisten: Projekte mit Erklärung, Texte in eigenen Worten, ein Bild davon, wie jemand wirklich ist. Das ist keine neue Erkenntnis – aber es fehlt ein Tool, das diesen Aufwand auf ein Minimum reduziert.

Die Idee war: Wer sich bewirbt, sollte nicht erst Webentwickler sein müssen. Foxfolio übernimmt Generierung und Hosting vollständig. Der Nutzer füllt ein Formular aus. Das war's.

## Technischer Aufbau

Die Anwendung war in zwei Teile gegliedert: ein Spring Boot Backend für Datenhaltung, Generierungslogik und Domain-Management, und Vaadin als Frontend – dasselbe Framework, mit dem ich bei der Infokom GmbH jahrelang gearbeitet habe und das ich gut kenne. Kein separates JavaScript-Frontend, kein API-Overhead für jede Kleinigkeit. Für eine formulargetriebene Anwendung wie Foxfolio ist Vaadin eine produktive Wahl.

Die Generierungslogik sollte aus strukturierten Nutzer-Daten statische Seiten erzeugen – ähnlich wie ein Static Site Generator, aber vollständig automatisiert ohne manuelle Konfiguration. Jedes generierte Portfolio sollte unabhängig deploybar und über eine eigene URL erreichbar sein.

## Aktueller Stand

Die Entwicklung ist pausiert. TinyBill v2 und der Übergang zur neuen Stelle hatten Vorrang. Das bedeutet nicht, dass die Idee tot ist. Der Markt für Bewerbungstools ist groß, die meisten sind schlecht, und das Problem das Foxfolio lösen würde ist real. Wenn die Zeit es erlaubt, wird das Projekt wieder aufgenommen.

---

