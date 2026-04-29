---
layout: home

hero:
  name: "Arthur Schimpf"
  text: "Softwareentwickler"
  tagline: "Karlsruhe · Java · Spring Boot · Seit 2019 schreibe ich Software, die auch in einem Jahr noch verständlich ist."
  image: "/images/me-portfolio.jpeg"
  actions:
    - theme: brand
      text: "Lebenslauf ansehen"
      link: /lebenslauf
    - theme: alt
      text: "Projekte"
      link: /projekte/
---

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue';

let revealObserver = null;

onMounted(() => {
  nextTick(() => {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  });
});

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect();
});
</script>

<div class="home-section">

<div class="reveal">

## Wer ich bin

Ich bin Softwareentwickler aus Karlsruhe und arbeite seit 2019 professionell mit Code. Was mich antreibt, ist nicht die Technologie selbst, sondern das was dahintersteckt: echte Probleme lösen, Software schreiben die jemand wirklich benutzt, und in einem Team arbeiten das einen gemeinsamen Nenner hat über das Warum. Technologie ist für mich ein Handwerk. Ich betreibe es, weil ich damit Dinge entstehen lasse, die Bedeutung haben, und nicht um der Technologie selbst willen.

</div>

<div class="reveal" data-delay="80">

Begonnen hat alles mit einem kaufmännischen Abitur am Ludwig-Erhard Gymnasium in Karlsruhe: BWL, Volkswirtschaft, Wirtschaftsmathematik. Nicht weil ich Buchhalter werden wollte, sondern weil ich verstehen wollte wie Organisationen funktionieren, wie Entscheidungen unter Unsicherheit getroffen werden, wie Systeme aufgebaut sind. Dieser wirtschaftliche Hintergrund begleitet mich bis heute. Er hilft mir zu verstehen, warum eine Software so gebaut sein muss wie sie gebaut ist, nicht nur wie. Wenn ich mit Fachleuten aus dem Controlling oder dem Vertrieb zusammenarbeite, finde ich Anknüpfungspunkte, die rein technisch geprägte Kollegen manchmal suchen müssen. Das ist ein Vorteil, den ich bewusst einsetze.

</div>

<div class="reveal" data-delay="120">

Dann kam die duale Ausbildung bei abas Software in Karlsruhe: vier Jahre, in denen ich gleichzeitig Fachinformatiker Anwendungsentwicklung studiert und täglich an echter Unternehmenssoftware mitgearbeitet habe. Java, Spring Boot, ERP-Integrationen, Web-Technologien. Die technische Grundlage. Nach der Ausbildung blieb ich ein weiteres halbes Jahr als Webentwickler und baute Shop-Plugins, die das abas ERP-System mit externen E-Commerce-Plattformen verknüpften. Kundenprojekte mit klaren Zeit- und Budgetvorgaben. Das hat früh ein Verständnis geschärft, was es bedeutet, wenn echte Nutzer auf echte Ergebnisse warten. Vor allem aber: gelernt, wie professionelle Teams Software bauen. Dass guter Code nicht von alleine entsteht, sondern durch Absprachen, Reviews, und die Bereitschaft, sich gegenseitig ehrlich zu sagen was nicht stimmt.

</div>

<div class="reveal" data-delay="160">
<img src="/images/workspace.jpeg" alt="Workspace" class="c-img" />
</div>

<hr class="home-divider">

<div class="reveal">

## Wie ich über Code denke

<p class="c-pullquote">Guter Code hat weniger mit Intelligenz zu tun als mit Disziplin und Empathie.</p>

Disziplin, weil es erheblich einfacher ist, schnell schlechten Code zu schreiben als langsam guten. Empathie, weil Code immer für Menschen lesbar sein muss, nicht nur für den Compiler. Die Frage, die mich bei jeder Entscheidung begleitet: Wird ein Kollege, der in einem Jahr auf diesen Code schaut, sofort verstehen was hier passiert? Wenn nicht, ist etwas falsch. Nicht am Kollegen, sondern am Code.

</div>

<div class="reveal" data-delay="80">

Das führt mich zu kurzen Methoden, zu sprechenden Variablennamen, zu Klassen die eine Sache gut können anstatt viele Dinge mittelmäßig. Nicht aus Ideologie. Sondern aus der praktischen Erfahrung, dass lesbarer Code einfacher zu testen ist, leichter zu erweitern, günstiger im Betrieb. Ich habe Code gesehen, der perfekt lief und trotzdem ein Albtraum war, weil niemand mehr wusste was er tat. Und ich habe Code gesehen, der nicht das Schnellste war, aber ein Team über Jahre glücklich gehalten hat, weil er verständlich blieb. Die zweite Art schreiben zu wollen ist keine Schwäche. Es ist Handwerk.

</div>

<div class="reveal" data-delay="120">

Gleichzeitig glaube ich nicht an Reinheitsdogmen. Sauberer Code ist kein Selbstzweck. Er ist ein Mittel, um Software langfristig wartbar und erweiterbar zu halten. Wenn der Kontext pragmatische Abstriche erfordert (Zeitdruck, Prototyp, Legacy-Umgebung), dann mache ich die Abstriche bewusst und dokumentiere sie.

<p class="c-pullquote">Der Unterschied zwischen einem schlechten Entwickler und einem pragmatischen liegt darin, dass der pragmatische weiß was er tut und warum.</p>

</div>

<hr class="home-divider">

<div class="reveal">

## Wie ich mit Menschen arbeite

Ich bin kein Entwickler, der mit Kopfhörern in der Ecke sitzt und hofft, nicht angesprochen zu werden. Ich arbeite gern mit Menschen. Diskussionen über Architekturentscheidungen, Code Reviews die tatsächlich etwas verändern, Retrospektiven in denen ehrlich gesagt wird was nicht geklappt hat: das ist für mich keine notwendige Pflicht neben der eigentlichen Arbeit. Es ist ein zentraler Teil davon.

</div>

<div class="reveal" data-delay="80">

<p class="c-pullquote">Fünf Minuten Gespräch lösen Probleme, über die man sonst stundenlang hin- und herschreibt.</p>

Ich glaube an direkte Kommunikation. Nicht an Direktheit als Rechtfertigung für Unhöflichkeit, sondern an die Überzeugung, dass klare Aussagen ein Team schneller voranbringen als diplomatische Andeutungen. Ich sage, wenn ich etwas nicht weiß. Ich sage, wenn eine Deadline nicht realistisch ist. Ich sage auch, wenn ich einen anderen Ansatz für besser halte, und ich kann begründen warum, ohne dabei persönlich zu werden.

</div>

<div class="reveal" data-delay="120">

Für Code Reviews gilt dasselbe Prinzip. Ein Review ist keine Beurteilung des Entwicklers, sondern eine Prüfung des Codes. Beides auseinanderzuhalten ist wichtig, und ich versuche in jeder Rückmeldung, die ich gebe, genau das zu tun. Ich schätze Reviews, die mir ehrlich sagen was verbesserungswürdig ist. Die beste Rückmeldung, die ich in meiner Karriere bekommen habe, war von einem Kollegen bei abas, der meinen ersten größeren Pull Request fast vollständig zurückgewiesen hat, mit ausführlicher Begründung für jeden Punkt. Das war unbequem. Und eines der lehrreichsten Erlebnisse, die ich in dieser Branche hatte.

</div>

<hr class="home-divider">

<div class="reveal">

## Was mich gerade beschäftigt

Anfang 2025 habe ich bei Hellmann Worldwide Logistics in einem kleinen, spezialisierten Team gearbeitet. Die Aufgabe war die Migration eines AS400-Systems in eine moderne Microservice-Architektur. Wir haben eine vollständige ETL-Pipeline gebaut, Daten aus dem Altsystem extrahiert, über einen eigenen Service transformiert und validiert, ins neue Domänenmodell eingespielt. Ein Angular-Frontend für die operativen Nutzer kam dazu. Es ging um Offerten, Angebote, Nebenkostenberechnungen, also die Kernprozesse, mit denen Hellmann seine Logistikleistungen bepreist.

</div>

<div class="reveal" data-delay="80">

Diese Arbeit klingt technisch trocken. Im Alltag war sie das Gegenteil. Detektivarbeit: Was macht dieser dreißig Jahre alte Code eigentlich? Warum wurde damals so entschieden? Welche Geschäftsregeln stecken in Prozessen, die nie dokumentiert wurden? Und gleichzeitig Architekturarbeit: Wie überführt man das in eine neue Welt, ohne Funktionen zu verlieren, die jemand benutzt, auch wenn sie in keinem Lastenheft stehen? Was man an Legacy-Systemen lernt, trägt man in jedes neue System.

</div>

<div class="reveal" data-delay="120">

Hellmann hat im Zuge einer konzernweiten Restrukturierung einen erheblichen Teil der Belegschaft abgebaut. Meine Stelle war davon betroffen, wirtschaftlich bedingt und nicht leistungsbedingt. Ich habe die Zeit genutzt, um genau hinzuschauen, was als Nächstes kommt. Ab Mai 2026 fange ich bei init SE in Karlsruhe als Software Engineer an.

</div>

<hr class="home-divider">

<div class="reveal">

## Außerhalb der Arbeit

Meine Freundin und ich haben seit April 2025 eine gemeinsame Wohnung in Karlsruhe. Die Renovierung hat uns das erste Jahr beschäftigt. Wer das selbst schon gemacht hat weiß, dass es erheblich mehr Planung, Koordination und Geduld braucht als erwartet. Parallel gibt es eigene Softwareprojekte, an denen ich in der Freizeit arbeite. Nicht primär um Geld zu verdienen, sondern weil das Bauen von Dingen eine eigene Freude hat, besonders wenn dabei etwas hängenbleibt, das sich auch beruflich auszahlt.

</div>

<div class="reveal" data-delay="80">

Ich bin seit Jahren an Videografie interessiert, konkret Filmen und Schneiden, weniger als Hobby denn als Gegenpol zum abstrakten Denken im Beruf. Ein Video zu schneiden hat ein konkretes, sichtbares Ergebnis auf das man zeigen kann. Das schätze ich. Außerdem: gute Serien, Story-Games wenn die Zeit es erlaubt. The Last of Us Part II war das einzige Spiel, das mich tagelang beschäftigt hat, nicht wegen der Spielmechanik, sondern wegen der Geschichte. Gute Erzählungen faszinieren mich, egal in welchem Medium.

</div>

<div class="reveal" data-delay="120">
<div class="c-img-grid">
  <img src="/images/me-and-selina.jpeg" alt="Arthur und Selina" />
  <img src="/images/apartment.jpeg" alt="Die neue Wohnung" />
</div>
</div>

<hr class="home-divider">

<div class="reveal">

## Kontakt

Ich freue mich über Nachrichten: Projektideen, Fragen oder einfach ein Gespräch. Direkt per E-Mail ist am schnellsten.

[Arthur.Schimpf@gmx.de](mailto:Arthur.Schimpf@gmx.de)

</div>

</div>
