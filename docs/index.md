---
layout: home

hero:
  name: "Arthur Schimpf 🤞🏻"
  text: "Softwareentwickler"
  tagline: "Karlsruhe, Deutschland"
  image: "/images/avatar.jpeg"
  actions:
    - theme: alt
      text: "Über mich"
      link: /#uber-mich

features:
  - icon: 🍞
    title: "Technologien, mit denen ich meinen Alltag bestreite"
    details: "Java, Spring Boot, Hibernate, Kubernetes, REST, Microservices, Postgres, Git"
    link: /#wer-bin-ich

  - icon: 🔥
    title: "Pain is the way to bring true peace."
    details: "– Pain (Naruto)"
    link: /#clean-code-und-best-practices

  - icon: 📜
    title: "www.TinyBill.de"
    details: "Das Projekt an dem ich aktuell privat arbeite"
    link: https://www.tinybill.de

  - icon: 🚛
    title: "Hellmann Mitarbeiter"
    details: "Ich arbeite bei der Firma Hellmann als Backend Entwickler"
    link: https://www.hellmann.com
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const startDate = new Date('2019-09-02');
const today = new Date();
const diffTime = Math.abs(today.getTime() - startDate.getTime());

const daysOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const minutesOfExperience = Math.ceil(diffTime / (1000 * 60));
const yearsOfExperience = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(2);
const monthsOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
const coffeeOfExperience = Math.ceil(daysOfExperience * 1.5); // simple fun estimate

const currentUnit = ref('days');
const displayValue = ref(daysOfExperience);

const toggleUnit = () => {
  if (currentUnit.value === 'days') {
    currentUnit.value = 'minutes';
    displayValue.value = minutesOfExperience;
  } else if (currentUnit.value === 'minutes') {
    currentUnit.value = 'years';
    displayValue.value = yearsOfExperience;
  } else if (currentUnit.value === 'years') {
    currentUnit.value = 'months';
    displayValue.value = monthsOfExperience;
  } else if (currentUnit.value === 'months') {
    currentUnit.value = 'coffee';
    displayValue.value = coffeeOfExperience;
  } else if (currentUnit.value === 'coffee') {
    currentUnit.value = 'days';
    displayValue.value = daysOfExperience;
  }
};

const roles = [
  'Softwareentwickler',
  'Bug-Detektiv',
  'Microservice-Schreiner',
  'Semikolon-Flüsterer'
];

const currentRoleIndex = ref(0);
const currentRole = computed(() => roles[currentRoleIndex.value]);

const cycleRole = () => {
  currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
};

const members = [
  {
    avatar: 'https://www.github.com/iqwrwq.png',
    name: 'iqwrwq',
    title: 'International Profile',
    links: [
      { icon: 'github', link: 'https://github.com/iqwrwq' },
      { icon: 'twitter', link: 'https://twitter.com/iqwrwq' }
    ]
  },
  {
    avatar: 'https://github.com/dev-arts-de.png',
    name: 'dev-arts-de',
    title: 'Deutsches Profil',
    links: [
      { icon: 'github', link: 'https://github.com/dev-arts-de' }
    ]
  }
];

const isNight = ref(false);

const konamiSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

const konamiIndex = ref(0);
const developerModeEnabled = ref(false);

const handleKeydown = (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  const expected = konamiSequence[konamiIndex.value];

  if (key === expected || (expected.length === 1 && key === expected.toLowerCase())) {
    konamiIndex.value += 1;
    if (konamiIndex.value === konamiSequence.length) {
      developerModeEnabled.value = true;
      konamiIndex.value = 0;
    }
  } else {
    if (key === konamiSequence[0] || key === konamiSequence[0].toLowerCase()) {
      konamiIndex.value = 1;
    } else {
      konamiIndex.value = 0;
    }
  }
};

const painClickCount = ref(0);
const showPainMessage = ref(false);

const handlePainClick = () => {
  painClickCount.value += 1;
  if (painClickCount.value >= 5) {
    showPainMessage.value = true;
  }
};

const devLogs = [
  '[INFO] Portfolio gestartet – Besucher erfolgreich inspiziert.',
  '[DEBUG] Kaffee-Level überprüft – Status: kritisch, aber stabil.',
  '[WARN] Versuch entdeckt, Legacy-Code zu öffnen.',
  '[INFO] Tinybill-Worker hochgefahren.',
  '[TRACE] Unnötige Optimierungsidee verworfen – vorerst.'
];

onMounted(() => {
  const hour = new Date().getHours();
  if (hour >= 20 || hour < 6) {
    isNight.value = true;
  }
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<br>

# Über mich

<p style="margin: 0 0 0.5rem 0;">
  Ich bin
  <span
    style="color: var(--vp-home-hero-name-color); cursor: pointer; font-weight: 600;"
    @click="cycleRole"
    title="Klick, um meinen aktuellen Titel zu wechseln"
  >
    {{ currentRole }}
  </span>
  aus Karlsruhe mit einer Vorliebe für saubere Backends, neugierige Side-Projects und einen Hauch Selbstironie.
</p>
<p v-if="isNight" style="font-size: 0.8rem; opacity: 0.8; margin: 0 0 1.5rem 0;">
  🌙 Night Mode: aktiv – wenn du das hier liest, arbeite ich vermutlich gerade noch an irgendeinem Refactor.
</p>

## Wer bin ich?

Ich bin ein leidenschaftlicher Full-Stack Software Entwickler mit über **<span style="color: var(
--vp-home-hero-name-color); cursor: pointer;" @click="toggleUnit">{{ displayValue }} {{ currentUnit }}</span>**
Erfahrung in der Entwicklung von modernen Webanwendungen sowie Backend-Lösungen. Dabei kombiniere ich technisches
Know-how mit kreativen Ansätzen, um maßgeschneiderte und effiziente Lösungen zu schaffen.
<br><br><small>(Klicken Sie auf die Anzahl der Tage, um zwischen den verschiedenen Einheiten zu wechseln. Bonus-Einheit inklusive. ☕)</small>

Ich bin bei Hellmann im Bereich Quotes/Offertenmanagement tätig, wo ich technisch die Migration eines alten AS400-Systems in eine moderne Infrastruktur vorantreibe.
Dabei sorge ich dafür, dass komplexe Angebots- und Kalkulationsprozesse zuverlässig in neue, skalierbare Systeme überführt werden.

Zuvor war ich im Baustoff-Sektor aktiv und habe dafür gesorgt, dass tausende Händler und Gesellschafter ihre Prozesse sicher abwickeln können.
Durch den Einsatz moderner Technologien wie Vaadin habe ich Schnittstellen entwickelt, die Backend und Frontend nahtlos miteinander verbinden und stabile,
effiziente Arbeitsabläufe ermöglichen.

---

<div
  style="padding: 1rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); margin-bottom: 1rem; cursor: pointer; background: rgba(255,255,255,0.02);"
  @click="handlePainClick"
  title="Fünfmal klicken für eine kleine Entwickler-Wahrheit."
>
  <strong>„Pain is the way to bring true peace.“ – Pain (Naruto)</strong>
  <div v-if="showPainMessage" style="margin-top: 0.35rem; font-size: 0.85rem; opacity: 0.9;">
    In der Softwarewelt bedeutet das: Ohne Schmerzen beim Debuggen gibt es keine stabilen Systeme.
  </div>
</div>

## Backend-Expertise

Meine Stärke liegt in der Entwicklung skalierbarer, robuster Backend-Lösungen. Ich erstelle APIs
und Datenbankarchitekturen, die sowohl leistungsfähig als auch sicher sind. Datensicherheit hat für
mich oberste Priorität, weshalb ich stets bewährte Sicherheitspraktiken implementiere – von der Authentifizierung
und Autorisierung bis hin zur Verschlüsselung sensibler Daten. Durch meine Erfahrung sorge ich dafür, dass Anwendungen
nicht nur stabil laufen, sondern auch potenzielle Bedrohungen minimiert und die Integrität der Daten gewährleistet
wird.

---

## Clean Code und Best Practices

Für mich ist Clean Code nicht nur ein Ansatz, sondern eine Verpflichtung. Ich folge strikt den Prinzipien der modernen
Softwareentwicklung und halte mich an Best Practices wie Conventional Commits, um eine klare und nachvollziehbare
Code-Historie sicherzustellen. Zudem setze ich das Vier-Augen-Prinzip bei Merge Requests um, sodass jeder Code vor
der Integration in das Hauptprojekt überprüft wird. Diese Arbeitsweise fördert eine Kultur des Qualitätsbewusstseins
und der kontinuierlichen Verbesserung.

---

## Neugierde und Weiterentwicklung

Ich bin ständig auf der Suche nach neuen Herausforderungen und Technologien, die mich weiterbringen.
Durch die Arbeit an kommerziellen Projekten erweitere ich kontinuierlich meinen Horizont und bleibe auf
dem neuesten Stand der Technik. Diese Erfahrungen helfen mir, innovative Lösungen zu entwickeln, die nicht nur
den Anforderungen meiner Kunden gerecht werden, sondern diese oft übertreffen.

---

## Agiles Arbeiten & Extreme Programming

In meiner täglichen Arbeit setze ich konsequent auf agile Methoden, insbesondere Scrum und Extreme Programming (XP).
Dabei schätze ich die Flexibilität und den klaren Fokus auf schnelle Iterationen sowie kontinuierliches Kundenfeedback.
Besonders Pair Programming ist für mich ein unverzichtbares Werkzeug, um sowohl die Qualität des Codes zu erhöhen als
auch den Wissensaustausch innerhalb des Teams zu fördern. Durch regelmäßige Code Reviews und
Test-driven Development (TDD) stelle ich sicher, dass neue Features nicht nur effizient, sondern auch sauber
und wartbar entwickelt werden.

---

## Mein Technologie-Stack

Ich arbeite täglich mit einem modernen Full-Stack-Technologie-Stack, der sowohl Frontend- als auch
Backend-Technologien umfasst:

- Frontend: Vue.js (mein Favorit), Svelte, React, TypeScript, HTML5, CSS3, SCSS
- Backend: Java, Spring Boot, Vaadin, Node.js
- Datenbanken: MySQL, PostgreSQL, MongoDB
- Tools & CI/CD: Docker, Jenkins, Git, GitLab CI, Azure DevOps
- Cloud & Infrastruktur: Microsoft Azure, AWS, Linux-Server-Administration
- Zusätzlich: Test-driven Development (TDD), Clean Code, RESTful APIs, GraphQL,  
  <span title="Eine Anwendung, die alleine sterben kann, ohne alle anderen mitzureißen (meistens).">Microservices</span>

Durch diesen breitgefächerten Stack bin ich in der Lage, Projekte flexibel und effektiv umzusetzen –
von der Datenbankarchitektur bis hin zu modernen Frontend-Interfaces.

---

### Meine GitHub Profile:

<VPTeamMembers size="small" :members="members" />

---

# Spaßprojekte

Neben meiner Arbeit experimentiere ich gern mit Ideen, die einfach Spaß machen und spielerisch neue Technologien kombinieren.

👉 [merkelfy.dev-arts.de](https://merkelfy.dev-arts.de)

---

# Shopitech – Mein Kleingewerbe

Seit **2023** betreibe ich mein Kleingewerbe **Shopitech**.  
Dort entwickle ich für ausgewählte Kunden:

- Webanwendungen
- Integrationen
- Websites und kleinere Tools

👉 [Shopitech.de](https://shopitech.de)

Shopitech ist auch die Heimat meines größten Nebenprojekts.

---

## Tinybill – Dokumentengenerator (Free to Use)

**Tinybill** ist ein kostenloser Dokumentengenerator, den ich Anfang **2025** ins Leben gerufen habe.  
Damit lassen sich geschäftliche Dokumente wie Rechnungen, Angebote und ähnliche Unterlagen komfortabel erstellen.

Ich arbeite pro Woche etwa **2–5 Stunden** an Tinybill und baue das Projekt kontinuierlich weiter aus – von neuen Features über UX-Verbesserungen bis hin zu kleinen Automatisierungen.  
Es verbindet für mich praktischen Nutzen mit der Möglichkeit, neue Ideen in Ruhe auszuprobieren.

👉 [Tinybill.de](https://tinybill.de)

### Tinybill Changelog (Auszug)

- `v0.1.0` – Erste Rechnung erfolgreich erstellt
- `v0.1.1` – Texte aufgeräumt, aber garantiert noch nicht alle Tippfehler gefunden
- `v0.1.3` – Kleine UX-Verbesserungen und weitere Spielereien im Hintergrund

---

## Developer Logs (Konami-Mode)

<div v-if="developerModeEnabled" style="border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); padding: 1rem; margin-top: 1rem; background: rgba(0,0,0,0.3); font-family: monospace; font-size: 0.85rem;">
  <strong>Developer Mode aktiviert 🎮</strong>
  <br /><br />
  <div v-for="(log, index) in devLogs" :key="index">
    {{ log }}
  </div>
  <br />
  <div style="font-size: 0.8rem; opacity: 0.9;">
    Tipp: Geheimtür testen? → <a href="/hidden">/hidden</a>
  </div>
</div>

<div v-else style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">
  <em>(Es gibt hier einen versteckten Developer Mode. Klassische Tastatur-Kombinationen könnten helfen.)</em>
</div>

---

# Kontakt

Ich freue mich darauf, von Ihnen zu hören! Zögern Sie nicht, mich über die folgenden Kanäle zu kontaktieren:

- **E-Mail**: [Arthur.Schimpf@dev-arts.de](mailto:Arthur.Schimpf@dev-arts.de)
- **LinkedIn**: [Mein LinkedIn-Profil](https://www.linkedin.com/in/dein-profil)
- **GitHub**: [Mein GitHub-Profil](https://github.com/dein-nutzername)