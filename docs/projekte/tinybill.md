---
aside: true
---

# TinyBill

**Web-Anwendung · Kostenlos · [tinybill.de](https://tinybill.de)**

TinyBill ist ein Dokumentengenerator für Rechnungen, Angebote und allgemeine Geschäftsdokumente. Wer eine Rechnung stellen will – als Freelancer, kleines Unternehmen oder Einzelperson – findet selten ein Tool, das genau das macht was es soll, ohne monatliche Abonnementgebühren und ohne überkomplizierte Oberflächen. TinyBill ist die Antwort auf dieses Problem: kostenlos nutzbar, ohne Account, ohne Abo.

<img src="/images/tinybill-screenshot.png" alt="TinyBill Screenshot" class="c-screenshot" />

## Wie es entstand

TinyBill ist direkt aus meiner Arbeit bei der Infokom GmbH hervorgegangen. Zwei Jahre habe ich dort an einem Full-Stack-System für die Finanzbuchhaltung gearbeitet – konkret: eine Webanwendung zur Verwaltung von Rechnungsdaten für sechzehn Mitarbeiter. Was nach einem kleinen Projekt klingt, war technisch anspruchsvoll. Rechnungsdaten haben eine eigene Komplexität, die man erst entdeckt, wenn man tief drin steckt: Steuersätze, Rundungsdifferenzen, Skontoregelungen, länderspezifische Formate, elektronische Rechnungsstandards wie ZUGFeRD und XRechnung. Ich habe in dieser Zeit mehr über Rechnungslegung gelernt als in allen Wirtschaftsfächern meines Abiturs zusammen.

Nach diesen zwei Jahren hatte ich eine Wissensbasis, die ich nicht einfach vergessen wollte. Gleichzeitig fiel mir auf, dass es keine befriedigende kostenlose Lösung für einfache Rechnungserstellung gibt – entweder zu teuer, zu komplex, oder mit schlechter UX. Das war der Auslöser für TinyBill.

## Technische Grundlage

Version 1 von TinyBill basiert auf Vaadin – einem Java-Framework, das Backend und Frontend direkt verbindet. Vaadin ist in der Entwicklerwelt nicht besonders populär, und das zu Unrecht. Für interne Business-Anwendungen, bei denen Java bereits im Backend läuft, ist es eine sehr produktive Wahl: man schreibt die gesamte Anwendungslogik in Java, und Vaadin übersetzt das in eine reaktive Benutzeroberfläche. Kein separates JavaScript-Frontend, kein REST-API-Overhead für jede Kleinigkeit. Die Infokom-Erfahrung hat mich gut mit Vaadin vertraut gemacht, und so war es die natürliche Wahl für einen schnellen Start.

Datenbankanbindung über Hibernate und JPA, PostgreSQL als Datenbank, Spring Security für die Authentifizierung. Der Standard-Stack, den ich aus Jahren täglicher Arbeit gut kenne.

## TinyBill Version 2

Version 2 ist ein kompletter Neustart – und mein aktuelles Lernprojekt für Kotlin. Die Entscheidung für einen Neustart kam nicht aus Unzufriedenheit mit Version 1, sondern aus einer architektonischen Überzeugung: ein monolithisches Frontend ist langfristig eine Einschränkung. Wer das Backend als reine API baut, kann darüber jedes beliebige Frontend legen – eine Webanwendung, ein mobiles Interface, ein Shopify-Plugin, was auch immer gebraucht wird.

Die Ziele für Version 2:

**API-first.** Das Backend stellt eine sauber dokumentierte REST-API bereit. Kein Framework-spezifischer Rendering-Mechanismus, kein Vaadin-Overhead, kein UI-Code im Backend. Reines HTTP, klare Schnittstellen, OpenAPI-Dokumentation.

**Kotlin statt Java.** Kotlin ist die Sprache, mit der ich gerade arbeiten will. Den besten Weg eine Sprache zu lernen ist, sie in einem echten Projekt einzusetzen – mit echten Nutzern, echten Fehlern, echten Anforderungen. TinyBill v2 ist mein Kotlin-Projekt. Was mich an Kotlin überzeugt: die Null-Safety zwingt zu explizitem Umgang mit dem, was fehlen kann. Data classes reduzieren Boilerplate dramatisch. Extension functions machen Code lesbar, ohne die Architektur aufzuweichen. Kotlin fühlt sich an wie Java, das von jemandem überarbeitet wurde, der die Schmerzpunkte kennt.

**Headless.** Kein vorgegebenes Frontend in Version 2. Die API kann von verschiedenen Clients genutzt werden. Geplant ist zunächst eine Vue-Webanwendung als primärer Client, langfristig auch ein Angular-Frontend und möglicherweise ein Shopify-Plugin für kleinere Händler.

## Was TinyBill mir beibringt

Neben den technischen Aspekten ist TinyBill auch ein Projekt, das mich zwingt, über Produktentscheidungen nachzudenken. Wer entscheidet, welche Features gebaut werden? Was ist wirklich nützlich für echte Nutzer, und was ist eine interessante technische Übung ohne praktischen Wert? Diese Fragen stelle ich mir bei TinyBill regelmäßig – und die Antworten fallen manchmal anders aus als erwartet.

Ein konkretes Beispiel: Ich hatte lange geplant, ZUGFeRD (einen Standard für elektronische Rechnungen mit eingebettetem XML) in Version 1 zu integrieren. Technisch interessant, gut dokumentiert. Dann habe ich Nutzer gefragt, ob sie das brauchen. Die Antwort war fast durchgehend: Nein. Was sie brauchten, war eine stabilere PDF-Generierung und eine bessere Vorschau. Das war ernüchternd und lehrreich zugleich. Ich habe die ZUGFeRD-Implementation auf unbestimmte Zeit zurückgestellt und mich auf die tatsächlich genutzten Features konzentriert.

---

[Zu TinyBill](https://tinybill.de){.cv-download-link}
