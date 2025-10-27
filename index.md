---
layout: home

hero:
  name: "Arthur Schimpf ✌🏻"
  text: "Softwareentwickler"
  tagline: "Karlsruhe, Deutschland"
  image: "/images/avatar.jpeg"
  actions:
    - theme: brand
      text: "Meine Projekte"
      link: /projects
    - theme: alt
      text: "Über mich"
      link: /#uber-mich

features:
  - icon: 🍞
    title: "Technologien, mit denen ich meine Brötchen verdiene"
    details: "Java, Spring-Boot, Hibernate, Vaadin, VueJS, GIT, Postgres"
    link: /#wer-bin-ich

  - icon: 🌙
    title: "When you move beyond your fear, you feel free."
    details: "– Spencer Johnson"
    link: /projects
    
  - icon: 📜
    title: "Lebenslauf"
    details: "Werfen Sie einen Blick auf meinen Lebenslauf"
    link: ./resume_arthur_schimpf_2024.pdf

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { ref, onMounted } from 'vue';

const startDate = new Date('2019-09-02');
const today = new Date();
const diffTime = Math.abs(today - startDate);

const daysOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const minutesOfExperience = Math.ceil(diffTime / (1000 * 60));
const yearsOfExperience = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(2);
const monthsOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

const currentUnit = ref('days');
const displayValue = ref(daysOfExperience);

const members = [
  {
    avatar: 'https://www.github.com/iqwrwq.png',
    name: 'iqwrwq',
    title: 'Software Developer',
    links: [
      { icon: 'github', link: 'https://github.com/iqwrwq' },
      { icon: 'twitter', link: 'https://twitter.com/iqwrwq' }
    ]
  },
];

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
    currentUnit.value = 'days';
    displayValue.value = daysOfExperience;
  }
};

const cpuUsage = ref(null);
const memoryUsage = ref(null);
const temperature = ref(null);

const fetchPiStatus = async () => {
  try {
    const response = await fetch('http://93.216.68.110:5000/status');
    const data = await response.json();
    cpuUsage.value = data.cpu;
    memoryUsage.value = data.memory;
    temperature.value = data.temp;
  } catch (error) {
    console.error('Error fetching Raspberry Pi status:', error);
  }
};

const statuses = {
  schlafzimmerLicht: ref('offline'),
  nightlyBuild: ref('online'),
  wohnzimmerVorhänge: ref('offline'),
  wohnungHeizung: ref('online'),
  dailyUpdate: ref('online'),
};

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.head.appendChild(script);
    fetchPiStatus();
});
</script>



<br>

# Über mich

## Wer bin ich?

Ich bin ein leidenschaftlicher Full-Stack Software Entwickler mit über **<span style="color: var(
--vp-home-hero-name-color); cursor: pointer;" @click="toggleUnit">{{ displayValue }} {{ currentUnit }}</span>**
Erfahrung in der Entwicklung von modernen Webanwendungen sowie Backendlösungen. Dabei kombiniere ich technisches 
Know-how mit kreativen Ansätzen, um maßgeschneiderte und effiziente Lösungen zu schaffen.
<br><br><small>(Klicken Sie auf die Anzahl der Tage, um zwischen den verschiedenen Einheiten zu wechseln)</small>

Aktuell arbeite ich im Baustoff-Sektor, wo ich maßgeblich dazu beitrage, dass tausende Händler und 
Gesellschafter ihre Geschäftsprozesse sicher und zuverlässig abwickeln können. Mit modernen Technologien 
wie Vaadin schaffe ich Schnittstellen, die Backend- und Frontend-Systeme nahtlos miteinander verbinden und so 
das Beste aus beiden Welten zusammenführen.

## **Backend-Expertise:**  
Meine Stärke liegt in der Entwicklung skalierbarer, robuster Backend-Lösungen. Ich erstelle APIs 
und Datenbankarchitekturen, die sowohl leistungsfähig als auch sicher sind. Datensicherheit hat für 
mich oberste Priorität, weshalb ich stets bewährte Sicherheitspraktiken implementiere – von der Authentifizierung 
und Autorisierung bis hin zur Verschlüsselung sensibler Daten. Durch meine Erfahrung sorge ich dafür, dass Anwendungen 
nicht nur stabil laufen, sondern auch potenzielle Bedrohungen minimiert und die Integrität der Daten gewährleistet 
wird.


## **Clean Code und Best Practices:**  
Für mich ist Clean Code nicht nur ein Ansatz, sondern eine Verpflichtung. Ich folge strikt den Prinzipien der modernen 
Softwareentwicklung und halte mich an Best Practices wie Conventional Commits, um eine klare und nachvollziehbare 
Code-Historie sicherzustellen. Zudem setze ich das Vier-Augen-Prinzip bei Merge Requests um, sodass jeder Code vor 
der Integration in das Hauptprojekt überprüft wird. Diese Arbeitsweise fördert eine Kultur des Qualitätsbewusstseins 
und der kontinuierlichen Verbesserung.


## **Neugierde und Weiterentwicklung**
Ich bin ständig auf der Suche nach neuen Herausforderungen und Technologien, die mich weiterbringen. 
Durch die Arbeit an kommerziellen Projekten erweitere ich kontinuierlich meinen Horizont und bleibe auf
dem neuesten Stand der Technik. Diese Erfahrungen helfen mir, innovative Lösungen zu entwickeln, die nicht nur
den Anforderungen meiner Kunden gerecht werden, sondern diese oft übertreffen.

## **Agiles Arbeiten & Extreme Programming**

In meiner täglichen Arbeit setze ich konsequent auf agile Methoden, insbesondere Scrum und Extreme Programming (XP). 
Dabei schätze ich die Flexibilität und den klaren Fokus auf schnelle Iterationen sowie kontinuierliches Kundenfeedback. 
Besonders Pair Programming ist für mich ein unverzichtbares Werkzeug, um sowohl die Qualität des Codes zu erhöhen als 
auch den Wissensaustausch innerhalb des Teams zu fördern. Durch regelmäßige Code Reviews und 
Test-driven Development (TDD) stelle ich sicher, dass neue Features nicht nur effizient, sondern auch sauber 
und wartbar entwickelt werden.

## **Mein Technologie-Stack**

Ich arbeite täglich mit einem modernen Full-Stack-Technologie-Stack, der sowohl Frontend- als auch 
Backend-Technologien umfasst:
- Frontend: Vue.js (mein Favorit), Svelte, React, TypeScript, HTML5, CSS3, SCSS
- kend: Java, Spring Boot, Vaadin, Node.js
- enbanken: MySQL, PostgreSQL, MongoDB
- Tools & CI/CD: Docker, Jenkins, Git, GitLab CI, Azure DevOps
- Cloud & Infrastruktur: Microsoft Azure, AWS, Linux-Server-Administration
- Zusätzlich: Test-driven Development (TDD), Clean Code, RESTful APIs, GraphQL

Durch diesen breitgefächerten Stack bin ich in der Lage, Projekte flexibel und effektiv umzusetzen – 
von der Datenbankarchitektur bis hin zu modernen Frontend-Interfaces.
### Mein Internationales Profil:

<VPTeamMembers size="small" :members="members" />

---

# Kontakt

Ich freue mich darauf, von Ihnen zu hören! Zögern Sie nicht, mich über die folgenden Kanäle zu kontaktieren:

- **E-Mail**: [Arthur.Schimpf@dev-arts.de](mailto:Arthur.schimpf@gmx.de)
- **LinkedIn**: [Mein LinkedIn-Profil](https://www.linkedin.com/in/dein-profil)
- **GitHub**: [Mein GitHub-Profil](https://github.com/dein-nutzername)

## PiBot <Badge type="tip">active</Badge>

Mein Pibot ist ein Raspberry Pi, welcher Zuhause bei mir für einige automatisierte Tasks versklavt wurde. Ihm geht es
gut, bitte rufen Sie nicht die Einsatzkräfte.

- **CPU Auslastung:** {{ cpuUsage !== null ? cpuUsage + ' %' : '10.2 %' }}
- **Speicherverbrauch:** {{ memoryUsage !== null ? memoryUsage + ' %' : '22.3 %' }}
- **Temperatur:** {{ temperature !== null ? temperature + ' °C' : 'N/A °C' }}

#### Zuletzt aktualisiert vom PiBot
<div style="margin-top: 20px;">
    <Badge 
      v-for="(status, key) in statuses" 
      :key="key" 
      :type="status.value === 'online' ? 'tip' : 'danger'">
      <span>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}</span>
    </Badge>
</div>

  