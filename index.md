---
layout: home

hero:
  name: "Arthur Schimpf 🤞🏻"
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
Erfahrung in der Entwicklung von modernen Webanwendungen sowie Backendlösungen.
<br><br><small>(Klicken Sie auf die Anzahl der Tage, um zwischen den verschiedenen Einheiten zu wechseln)</small>

Derzeit arbeite ich im Baustoff-Sektor und sorge dafür, dass tausende Händler und Gesellschafter zuverlässig und sicher
ihre Rechnungen erfassen können. Mit modernen Tools wie Vaadin schaffe ich damit eine Verbindung zweier Welten.

**Backend-Expertise:**  
Ich bringe umfangreiche Erfahrung im Backend-Development mit, einschließlich der Entwicklung von robusten, skalierbaren
APIs und Datenbankarchitekturen. Ich lege großen Wert auf die Sicherheit meiner Anwendungen und setze bewährte
Sicherheitspraktiken um, um potenzielle Bedrohungen zu minimieren und die Datenintegrität zu gewährleisten. Die
Implementierung von Authentifizierungs- und Autorisierungsmechanismen sowie die Verschlüsselung sensibler Daten sind für
mich selbstverständlich.

**Clean Code und Best Practices:**  
Clean Code ist für mich nicht nur ein Prinzip, sondern eine Lebensweise. Ich halte mich strikt an die Prinzipien der
Softwareentwicklung und folge den Richtlinien der Conventional Commits, um eine klare Historie meiner Änderungen zu
gewährleisten. Zudem arbeite ich nach dem 4-Augen-Prinzip bei Merge Requests, um sicherzustellen, dass jeder Code von
einem Kollegen überprüft wird, bevor er in das Hauptprojekt integriert wird. So schaffe ich eine Kultur des
Qualitätsbewusstseins und der kontinuierlichen Verbesserung in meinen Projekten.

Zusätzlich probiere ich mich in mehreren kommerziellen Projekten, um meine Fähigkeiten weiter zu entwickeln und neue
Technologien zu erforschen. Diese Erfahrungen erweitern meinen Horizont und helfen mir, innovative Lösungen zu
entwickeln, die den Bedürfnissen meiner Kunden gerecht werden.

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

  