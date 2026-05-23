---
aside: true
---

# wunschliste-selina.de

**Wunschliste für Selina · Next.js · Prisma · 2026 · [wunschliste-selina.de](https://wunschliste-selina.de)**

wunschliste-selina.de ist eine kleine Webseite, die ich für meine Freundin Selina gebaut habe. Sie zeigt ihre Wunschliste zum Geburtstag und zu anderen Anlässen, sodass Familie und Freunde wissen, worüber sie sich freut, und untereinander absprechen können, wer was übernimmt. Reine Geste, kein großes Projekt, aber technisch sauber umgesetzt und mit einem Design, das zu Selina passt und nicht zu meinem üblichen Entwickler-Geschmack.

Das Datum, an dem die Seite tatsächlich wichtig wurde, war der 30. Mai 2026, Selinas zweiundzwanzigster Geburtstag. Seitdem läuft sie für weitere Anlässe weiter, Weihnachten, Geburtstag im nächsten Jahr, was immer kommt.

## Warum nicht Amazon-Wunschliste

Amazon hat eine eingebaute Wunschlisten-Funktion. Die nutzen wir auch, aber sie hat zwei Schwächen. Erstens sieht die Amazon-Wunschliste nüchtern aus, sie ist auf Effizienz optimiert und nicht auf einen schönen Moment. Zweitens kann man dort keine Wünsche hinzufügen, die nicht auf Amazon liegen. Wenn Selina sich einen Pulli aus einem kleineren Online-Shop wünscht, eine Gutschrift in einem Kunstbedarf-Laden, oder einfach Bargeld für ein bestimmtes Erlebnis, dann passt das nicht in Amazon.

Was ich gebaut habe, ist eine Erweiterung dieser Idee. Die Seite zieht Selinas Amazon-Wunschliste regelmäßig automatisch ein, sodass die dort eingetragenen Wünsche immer aktuell sind. Zusätzlich kann sie über die Seite weitere Wünsche pflegen, mit Bildern, Notizen, Links zu beliebigen Shops. Jeder Wunsch hat eine Kategorie, einen kleinen Marker für die Wichtigkeit, und einen Status, ob er bereits reserviert ist oder noch frei.

## Wie die Reservierung funktioniert

Das wichtigste Feature ist die Reservierung. Wer Selina etwas schenken möchte, klickt auf den Wunsch und kann ihn als "ich übernehme das" markieren. Andere Besucher sehen dann, dass dieser Wunsch reserviert ist, und wissen, dass sie etwas anderes aussuchen sollten. So vermeidet man Doppelungen.

Die Reservierung läuft über einen Session-Token, der lokal im Browser gespeichert wird. Wer einen Wunsch reserviert, bekommt diesen Token und kann seine Reservierung später wieder rückgängig machen, falls sich etwas ändert. Niemand muss sich anmelden, niemand braucht ein Konto. Es gibt keine Login-Maske, keine Passwörter, keine E-Mail-Verifikation. Die einzige Person, die etwas tun muss, ist Selina selbst, wenn sie ihre Liste pflegt.

Die Reservierung bleibt anonym. Selina sieht zwar, dass ein Wunsch reserviert ist, aber nicht von wem. So bleibt die Überraschung am Geburtstag erhalten.

## Design

Das Design ist bewusst weich und persönlich. Helle Farben, viele Weißräume, runde Ecken, kleine Herzchen als visueller Marker für Lieblingswünsche. Die Wünsche sind als Karten dargestellt, mit Produktbild, Titel, einer kurzen Notiz und einem Tag wie "Top!", "Traum" oder "süß", den Selina selbst vergibt. Der Ton der Seite ist warm und einladend. Im Footer steht "made with ♡ for Selina".

Das war ein bewusstes Abrücken von dem typografisch strengen, gedeckten Design, das ich sonst für Software-Projekte wähle. Die Seite gehört Selina, nicht mir. Sie sollte sich anfühlen wie etwas, das für sie gemacht wurde, und nicht wie eine technische Lösung mit hübscher Oberfläche.

## Technischer Aufbau

Die Anwendung läuft auf Next.js 16 mit React 19. Tailwind CSS in Version 4 für das Styling. Die Datenhaltung läuft über Vercel Postgres, der Datenbankzugriff über Prisma. Die Wahl fiel auf diesen Stack, weil ich für ein kleines Projekt minimale Reibung wollte. Vercel Postgres ist mit einem Klick bereitgestellt, Prisma generiert den Client und kümmert sich um Migrationen, Next.js bringt App-Router, Server Components und die nötige Infrastruktur für API-Routen mit.

Das Datenmodell ist einfach. Eine `Wishlist` gehört zu einer Person und einem Anlass. `Items` gehören zu einer Wishlist und haben einen Titel, eine Beschreibung, einen optionalen Preis, ein optionales Bild und eine `canonicalUrl`, die auf das Produkt im jeweiligen Shop verweist. Items haben außerdem eine optionale Kategorie und eine Liste alternativer `Links`, falls dasselbe Produkt bei mehreren Händlern verfügbar ist. Die Reservierung wird über zwei Felder am Item abgebildet: ein Zeitstempel und der erwähnte Session-Token.

Es gibt einen täglichen Cron-Job, der unter `/api/cron/sync-all` läuft. Er holt die hinterlegten Amazon-Wunschlisten ab, parst die Produkte heraus und legt sie in der Datenbank ab. Vorhandene Items werden aktualisiert, neue ergänzt, entfernte Items werden als gelöscht markiert. So bleibt die Seite synchron, ohne dass jemand manuell eingreifen muss.

Zwei kleine Admin-Werkzeuge gibt es zusätzlich: eine Reset-Seite, mit der ich die Datenbank zurücksetzen kann, und eine Sync-Seite, die einen manuellen Sync-Lauf auslöst. Beide sind nicht öffentlich, sondern nur über einen direkten Link erreichbar und mit einem einfachen Schutz versehen.

## Was das Projekt für mich war

Im Kern war wunschliste-selina.de eine Aufmerksamkeit. Selina hat irgendwann erzählt, dass ihr die Amazon-Wunschliste zu unpersönlich ist, und ich habe das mitgenommen, ohne weiter darüber zu reden. Ein paar Wochenenden später stand die erste Version online und ich habe ihr den Link geschickt. Die Reaktion war so wie erhofft.

Was mich an dem Projekt überrascht hat, war wie viel Spaß die Detailarbeit gemacht hat. Die genaue Wahl der Herzchen-Marker, die Animation beim Reservieren, das Verhalten der Karten beim Hover, das Verhalten der Liste auf einem Smartphone. Diese Kleinigkeiten machen den Unterschied zwischen "funktional" und "schön", und in einem Projekt für eine konkrete Person, die man jeden Tag sieht, lohnt sich dieser Aufwand sofort sichtbar.

---

[wunschliste-selina.de](https://wunschliste-selina.de){.cv-download-link}
