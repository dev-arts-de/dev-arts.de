---
aside: true
---

# awave

**Dateiverwaltung · PHP · Web-Oberfläche · ~2020–21**

awave war ein Werkzeug zur Dateiverwaltung über den Browser: Dateien anlegen, finden, organisieren, gruppieren – mit einer selbst gebauten Web-Oberfläche auf PHP-Basis. Nie wirklich produktiv, nie richtig fertig. Aber eines der Projekte, das mich am meisten gelehrt hat.

## Die Idee

Die Idee war, eine lokale Dateiverwaltung zu bauen, die man über jeden Browser aufrufen kann – ohne installierte Software, ohne Cloud. PHP lief auf einem lokalen Server, die Oberfläche war im Browser. Für die damalige Zeit eine vernünftige Lösung für das Problem.

Was das Projekt besonders gemacht hat: ich habe nicht einfach angefangen Code zu schreiben. Ich habe versucht, eine eigene Dependency-Injection-Struktur zu bauen – also das Prinzip, das Frameworks wie Spring Boot intern umsetzen, selbst nachzubauen. Warum Klassen ihre Abhängigkeiten nicht selbst erzeugen sollten. Wie ein Container weiß, was er wo einsetzen muss.

## Was es gebracht hat

Das war das erste Mal, dass ich wirklich über Architektur nachgedacht habe – nicht als abstraktes Konzept, sondern als praktisches Problem. Warum macht es einen Unterschied, ob eine Klasse ihre Abhängigkeiten selbst erzeugt oder von außen bekommt? Was ist der Unterschied zwischen Code der funktioniert und Code der wartbar ist?

Diese Fragen hätte ich bei einem normalen Tutorial-Projekt nicht gestellt. awave hat sie erzwungen – weil ich mir selbst Grenzen gesetzt hatte, die ich dann auch einhalten wollte.

Das Projekt läuft nicht mehr. Die Erkenntnisse schon.

---
