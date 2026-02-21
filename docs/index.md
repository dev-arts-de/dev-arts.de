---
layout: home

hero:
  name: "Arthur Schimpf"
  text: "Softwareentwickler"
  tagline: "Karlsruhe, Deutschland ✌🏻"
  image: "/images/avatar.png"
  actions:
    - theme: brand
      text: "Über mich"
      link: /#about
    - theme: alt
      text: "Projekte"
      link: /#projekte

features:
  - icon: ☕
    title: "Java · Spring Boot · Kotlin"
    details: "Mein Brot und Butter – damit verdiene ich mein Geld."
    link: /#tech-stack

  - icon: 🔧
    title: "www.TinyBill.de"
    details: "Dokumentengenerator – V2 kommt mit Kotlin & API-first Ansatz"
    link: /#tinybill

  - icon: 🚛
    title: "Offen für Arbeit"
    details: "Aktuell bin ich auf der Suche nach einer neuen beruflichen Herausforderung."
    link: /#kontakt
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// ─── Sprachumschaltung / Language Toggle ─────────────────────────
const lang = ref('de');
const toggleLang = () => {
  lang.value = lang.value === 'de' ? 'en' : 'de';
};
const t = (de, en) => lang.value === 'de' ? de : en;

// ─── Toggle: Kleingewerbe / Side projects in Career path ─────────
const showSideProjectsInCareer = ref(false);
const toggleSideProjectsInCareer = () => {
  showSideProjectsInCareer.value = !showSideProjectsInCareer.value;
};

const sideProjectsToggleLabel = computed(() => t('Kleingewerbe Shopitech mit Anzeigen', 'Show Shopitech side projects'));
const sideProjectsToggleState = computed(() => showSideProjectsInCareer.value ? t('AN', 'ON') : t('AUS', 'OFF'));

// ─── Shopitech Projekte (safe, single-line mustache in HTML) ─────
const shopitechIntro = computed(() =>
  t(
    'Shopitech ist mein Kleingewerbe. Dort setze ich ausgewählte Webprojekte um – von Unternehmensseiten bis hin zu Webapps wie TinyBill.',
    'Shopitech is my small business. I build selected web projects there — from company websites to web apps like TinyBill.'
  )
);

const shopitechCard = {
  cw: computed(() => t('Handwerker-Service in Baden-Baden', 'Craftsman service in Baden-Baden')),
  mango: computed(() => t('Restaurant-Webseite', 'Restaurant website')),
  notruf: computed(() => t('Hausnotrufservice (Aufbau)', 'Emergency call service (early stage)')),
  tinybill: computed(() => t('Webapp zur Rechnungsgenerierung', 'Invoice generation web app')),
};

// ─── Erfahrungszähler / Experience Counter ───────────────────────
const startDate = new Date('2019-09-02');
const today = new Date();
const diffTime = Math.abs(today.getTime() - startDate.getTime());

const daysOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const minutesOfExperience = Math.ceil(diffTime / (1000 * 60));
const yearsOfExperience = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
const monthsOfExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
const coffeeOfExperience = Math.ceil(daysOfExperience * 1.5);
const bugsFixed = Math.ceil(daysOfExperience * 2.3);
const commitsEstimate = Math.ceil(daysOfExperience * 3.2);

const units = ['years', 'days', 'months', 'minutes', 'coffee', 'bugs', 'commits'];
const unitLabels = {
  years: { de: 'Jahren', en: 'years' },
  days: { de: 'Tagen', en: 'days' },
  months: { de: 'Monaten', en: 'months' },
  minutes: { de: 'Minuten', en: 'minutes' },
  coffee: { de: 'Tassen Kaffee', en: 'cups of coffee' },
  bugs: { de: 'gefixten Bugs', en: 'bugs fixed' },
  commits: { de: 'Commits', en: 'commits' }
};
const unitValues = {
  years: yearsOfExperience,
  days: daysOfExperience,
  months: monthsOfExperience,
  minutes: minutesOfExperience,
  coffee: coffeeOfExperience,
  bugs: bugsFixed,
  commits: commitsEstimate
};

const currentUnitIndex = ref(0);
const currentUnit = computed(() => units[currentUnitIndex.value]);
const displayValue = computed(() => unitValues[currentUnit.value]);
const displayLabel = computed(() => unitLabels[currentUnit.value][lang.value]);

const toggleUnit = () => {
  currentUnitIndex.value = (currentUnitIndex.value + 1) % units.length;
};

// ─── Rollenkarussell ─────────────────────────────────────────────
const roles = {
  de: ['Softwareentwickler', 'Backend-Architekt', 'Microservice-Schreiner', 'Clean-Code-Verfechter', 'Kotlin-Lehrling', 'Git-History-Perfektionist'],
  en: ['Software Developer', 'Backend Architect', 'Microservice Carpenter', 'Clean Code Advocate', 'Kotlin Apprentice', 'Git History Perfectionist']
};

const currentRoleIndex = ref(0);
const currentRole = computed(() => roles[lang.value][currentRoleIndex.value]);
const cycleRole = () => {
  currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.de.length;
};

// ─── Nachtmodus-Erkennung ────────────────────────────────────────
const isNight = ref(false);

// ─── Tech Stack Kategorie Toggle ─────────────────────────────────
const activeCategory = ref('daily');

// ─── Konami Code Easter Egg ──────────────────────────────────────
const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
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
    konamiIndex.value = key === konamiSequence[0] ? 1 : 0;
  }
};

// ─── Dev-Konsole Logs ────────────────────────────────────────────
const devLogs = {
  de: [
    '[INFO] Portfolio gestartet – Besucher wird inspiziert.',
    '[DEBUG] Kaffee-Level: kritisch, aber stabil.',
    '[WARN] Legacy-Code-Öffnung abgelehnt.',
    '[INFO] Tinybill v2 Worker hochgefahren.',
    '[TRACE] Über-Optimierungsidee verworfen – vorerst.',
    '[INFO] Kotlin-Kompilierung... erfolgreich. Diesmal.',
    '[DEBUG] Wohnung-Renovierungs-Backlog: 47 offene Tickets.',
  ],
  en: [
    '[INFO] Portfolio booted – inspecting visitor.',
    '[DEBUG] Coffee level: critical but stable.',
    '[WARN] Legacy code access denied.',
    '[INFO] Tinybill v2 worker spun up.',
    '[TRACE] Over-optimization idea discarded – for now.',
    '[INFO] Kotlin compilation... success. This time.',
    '[DEBUG] Apartment renovation backlog: 47 open tickets.',
  ]
};

// ─── GitHub Profile ──────────────────────────────────────────────
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

// ─── Lifecycle ───────────────────────────────────────────────────
onMounted(() => {
  const hour = new Date().getHours();
  isNight.value = hour >= 21 || hour < 6;
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- STICKY SPRACHUMSCHALTER (unten rechts, immer sichtbar)        -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<div style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 100;">
  <button
    @click="toggleLang"
    style="
      background: var(--vp-c-bg-elv);
      border: 1px solid var(--vp-c-divider);
      border-radius: 2rem;
      padding: 0.5rem 1.1rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--vp-c-text-1);
      box-shadow: 0 2px 12px rgba(0,0,0,0.15);
      transition: all 0.2s ease;
      backdrop-filter: blur(8px);
    "
    :title="t('Auf Englisch wechseln', 'Auf Deutsch wechseln')"
  >
    {{ t('🇬🇧 EN', '🇩🇪 DE') }}
  </button>
</div>

<!-- Nachtmodus-Hinweis -->
<p v-if="isNight" style="font-size: 0.8rem; opacity: 0.5; text-align: center; margin: 0.5rem 0 0 0;">
  🌙 {{ t('Du bist spät dran – ich vermutlich auch. Wahrscheinlich refactore ich gerade irgendwas.', 'You\'re up late – so am I, probably. Most likely refactoring something right now.') }}
</p>

<br>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- ÜBER MICH                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h1 id="about">{{ t('Über mich', 'About me') }}</h1>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; margin-bottom: 1.5rem;">
  <div>
    <p style="margin: 0 0 0.5rem 0; font-size: 1.1rem; line-height: 1.7;">
      {{ t('Ich bin', 'I\'m') }}
      <span style="color: var(--vp-home-hero-name-color); cursor: pointer; font-weight: 600;" @click="cycleRole" :title="t('Klick für den nächsten Titel', 'Click for the next title')">{{ currentRole }}</span>
      {{ t('aus Karlsruhe.', 'from Karlsruhe, Germany.') }}
    </p>
    <p style="line-height: 1.8; margin-bottom: 1rem;">
      {{ t('Seit über ', 'With over ') }}<span style="color: var(--vp-home-hero-name-color); cursor: pointer; font-weight: 600;" @click="toggleUnit" :title="t('Klick, um die Einheit zu wechseln', 'Click to switch unit')">{{ displayValue }} {{ displayLabel }}</span>{{ t(
        ' arbeite ich professionell mit Code. Mein Alltag besteht aus Java, Spring Boot und allem, was dazugehört – Datenbanken, APIs, Microservices. Frontend kann ich auch, aber ehrlich: Mein Herz schlägt fürs Backend.',
        ' I\'ve been working professionally with code. My day-to-day is Java, Spring Boot and everything that comes with it – databases, APIs, microservices. I can do frontend too, but let\'s be real: my heart is in the backend.'
      ) }}
    </p>
  </div>
  <div style="display: flex; justify-content: center;">
    <img src="/images/me-portfolio.jpeg" alt="Arthur Schimpf" style="border-radius: 0.75rem; max-width: 100%; max-height: 320px; object-fit: cover; border: 1px solid var(--vp-c-divider);" />
  </div>
</div>

<p style="line-height: 1.8; margin-bottom: 1rem;">
  {{ t(
    'Was mich von vielen Entwicklern unterscheidet: Ich bin ein geselliger Mensch. Ich arbeite am liebsten im Team, kommuniziere direkt – am besten persönlich oder im Call, nicht über endlose Chat-Threads – und glaube fest daran, dass guter Code auch gute Zusammenarbeit braucht. Merge Requests sind für mich kein Overhead, sondern die Basis für Qualität. Wenn etwas unklar ist, stehe ich lieber auf und gehe zum Schreibtisch des Kollegen, als drei Nachrichten hin und her zu schicken.',
    'What sets me apart from many developers: I\'m a people person. I thrive in teams, communicate directly – preferably face-to-face or on a call, not through endless chat threads – and firmly believe that good code requires good collaboration. Merge requests aren\'t overhead to me, they\'re the foundation of quality. When something\'s unclear, I\'d rather walk over to a colleague\'s desk than send three messages back and forth.'
  ) }}
</p>

<p style="line-height: 1.8; margin-bottom: 1rem;">
  {{ t(
    'Was mich an der Softwareentwicklung fasziniert: Die Freiheit und die Kopfarbeit. Dieses Gefühl, wenn eine Lösung endlich funktioniert – nach Stunden des Debuggens – ist durch nichts zu ersetzen. Und dann gibt es diese eigene kleine Welt, in der sich Entwickler untereinander sofort verstehen, ohne viel erklären zu müssen. Fachliche Diskussionen mit Gleichgesinnten sind für mich einer der besten Teile dieses Berufs.',
    'What fascinates me about software development: the freedom and the mental work. That feeling when a solution finally clicks – after hours of debugging – is irreplaceable. And there\'s this little world where developers instantly understand each other without needing much explanation. Technical discussions with like-minded people are one of the best parts of this profession.'
  ) }}
</p>

<p style="line-height: 1.8; margin-bottom: 1rem;">
  {{ t(
    'Aktuell lerne ich Kotlin, habe mit meiner Freundin im April 2025 eine Wohnung gekauft (das größte Projekt außerhalb von Code – der Renovierungs-Backlog ist endlos), und suche ehrlich gesagt nach einer neuen beruflichen Herausforderung. Mein aktueller Arbeitgeber baut Stellen ab. Wenn du also jemanden suchst, der nicht nur sauberen Code schreibt, sondern auch gern mit Menschen arbeitet – dann lass uns reden.',
    'Currently I\'m learning Kotlin, my girlfriend and I bought an apartment in April 2025 (the biggest project outside of code – the renovation backlog is endless), and I\'m honestly looking for a new professional challenge. My employer is downsizing. So if you\'re looking for someone who doesn\'t just write clean code but also genuinely enjoys working with people – let\'s talk.'
  ) }}
</p>

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WAS ICH EIGENTLICH MACHE                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2>{{ t('Was ich eigentlich mache', 'What I actually do') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1.5rem;">
  {{ t(
    'Wenn mich jemand beim Bier fragt, was ich beruflich mache, sage ich: Ich sorge dafür, dass alte Systeme nicht in der Versenkung verschwinden.',
    'When someone asks me over a beer what I do for a living, I say: I make sure legacy systems don\'t vanish into thin air.'
  ) }}
</p>

<div style="padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); margin-bottom: 1.5rem; background: var(--vp-c-bg-soft); line-height: 1.8;">
  <p style="margin: 0 0 1rem 0;">
    {{ t(
      'Bei Hellmann Worldwide Logistics migriere ich ein AS400-System. AS400 war zu seiner Zeit eine brillante Technologie – robust, zuverlässig, ein echtes Arbeitstier. Das Problem: Die Leute, die es gebaut und gewartet haben, gehen nach und nach in den Ruhestand. Manche sind schon nicht mehr da. Wenn niemand mehr versteht, wie das System funktioniert, steht das Geschäft still.',
      'At Hellmann Worldwide Logistics, I\'m migrating an AS400 system. AS400 was brilliant technology in its day – robust, reliable, a real workhorse. The problem: the people who built and maintained it are gradually retiring. Some are already gone. When nobody understands how the system works anymore, business grinds to a halt.'
    ) }}
  </p>
  <p style="margin: 0 0 1rem 0;">
    {{ t(
      'Mein Job in einem kleinen, spezialisierten Team: Die Daten und Geschäftslogik aus dem AS400 herauslösen und in eine moderne Microservice-Architektur überführen. Konkret geht es um Offerten, Angebote und Nebenkostenberechnungen – die Kernprozesse, mit denen Hellmann seine Logistik-Services bepreist. Rund 100 Anwender national und international arbeiten damit.',
      'My job in a small, specialized team: extract data and business logic from the AS400 and migrate it into a modern microservice architecture. Specifically, we handle quotes, offers, and surcharge calculations – the core processes Hellmann uses to price its logistics services. Around 100 users work with it nationally and internationally.'
    ) }}
  </p>
  <p style="margin: 0; opacity: 0.8; font-size: 0.9rem;">
    {{ t(
      'Das klingt trocken, ist aber im Alltag eine spannende Mischung aus Detektivarbeit (was macht dieser 30 Jahre alte Code eigentlich?), sauberer Architektur (wie bauen wir es richtig neu?) und Teamarbeit über Fachgrenzen hinweg.',
      'Sounds dry, but in practice it\'s a fascinating mix of detective work (what does this 30-year-old code actually do?), clean architecture (how do we rebuild it properly?) and cross-functional teamwork.'
    ) }}
  </p>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WERDEGANG                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2>{{ t('Werdegang', 'Career path') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1rem; opacity: 0.85;">
  {{ t('Drei Stationen, jede mit einer eigenen Lektion.', 'Three stations, each with its own lesson.') }}
</p>

<!-- Toggle Button (inside Career path section) -->
<div style="display: flex; align-items: center; gap: 0.75rem; margin: 0 0 1.5rem 0; flex-wrap: wrap;">
  <button
    @click="toggleSideProjectsInCareer"
    :aria-pressed="showSideProjectsInCareer"
    style="
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.55rem 0.9rem;
      border-radius: 0.65rem;
      border: 1px solid var(--vp-c-divider);
      background: var(--vp-c-bg-soft);
      color: var(--vp-c-text-1);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.18s ease;
    "
  >
    <span style="opacity: 0.9;">{{ sideProjectsToggleLabel }}</span>
    <span
      style="
        padding: 0.15rem 0.5rem;
        border-radius: 999px;
        border: 1px solid var(--vp-c-divider);
        background: var(--vp-c-bg);
        font-size: 0.8rem;
        opacity: 0.9;
      "
    >
      {{ sideProjectsToggleState }}
    </span>
  </button>
</div>

<!-- Hellmann -->
<div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-brand); margin-bottom: 2rem;">
  <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-brand); border-radius: 50%;"></div>
  <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2025 – {{ t('aktuell', 'present') }}</p>
  <h3 style="margin: 0.25rem 0 0.25rem 0;">Digital Transformation Projects Programmer</h3>
  <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">Hellmann Worldwide Logistics SE</p>
  <p style="line-height: 1.8; margin: 0 0 0.75rem 0;">
    {{ t(
      'Migration von Offerten- und Commercial-Systemen von AS400 in eine moderne Microservice-Architektur. Backend-Services mit Spring, REST-APIs zur Anbindung interner Systeme. Cross-funktionale Teamarbeit in einem kleineren, spezialisierten Team.',
      'Migrating quote and commercial systems from AS400 into a modern microservice architecture. Backend services with Spring, REST APIs for internal system integration. Cross-functional teamwork in a smaller, specialized team.'
    ) }}
  </p>
  <p style="line-height: 1.8; margin: 0; font-size: 0.9rem; opacity: 0.8;">
    {{ t('Neues für mich: Erstkontakt mit Angular im Frontend. Nach Jahren mit Vue eine interessante Umstellung.', 'New for me: first hands-on experience with Angular on the frontend. After years with Vue, an interesting shift.') }}
  </p>
</div>

<!-- Side projects inside Career path (toggle controlled) -->
<div v-if="showSideProjectsInCareer">
  <!-- Dein-Notruf -->
  <div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 2rem;">
    <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
    <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2026 – {{ t('aktuell', 'present') }}</p>
    <h3 style="margin: 0.25rem 0 0.25rem 0;">Dein-Notruf</h3>
    <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">{{ t('Hausnotruf-Service (Aufbauphase)', 'Personal emergency call service (early stage)') }}</p>
    <p style="line-height: 1.8; margin: 0; font-size: 0.95rem; opacity: 0.9;">
      {{ t(
        'Ein Service, den ich zusammen mit einer sehr engen Freundin aufbauen möchte. Aktuell sind wir in der Aufbauphase – ich informiere mich, plane Prozesse und kläre die Grundlagen.',
        'A service I want to build with a very close friend. We are currently in the setup phase — researching, planning processes, and establishing the fundamentals.'
      ) }}
    </p>
  </div>

  <!-- Tinybill -->
  <div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 2rem;">
    <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
    <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2025 – {{ t('aktuell', 'present') }}</p>
    <h3 style="margin: 0.25rem 0 0.25rem 0;">TinyBill</h3>
    <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">{{ t('Rechnungsgenerator Software', 'Invoice generator software') }}</p>
    <p style="line-height: 1.8; margin: 0; font-size: 0.95rem; opacity: 0.9;">
      {{ t(
        'TinyBill ist eine Rechnungsgenerator-Software. Aktuell arbeite ich an einer API-first, headless Version 2 – mit dem Ziel, das Backend sauber als API bereitzustellen und Frontends flexibel anzubinden.',
        'TinyBill is an invoice generator. I am currently building an API-first, headless version 2 to provide a clean backend API and connect flexible frontends.'
      ) }}
    </p>
  </div>

  <!-- Shopitech -->
  <div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 2rem;">
    <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
    <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2023 – {{ t('aktuell', 'present') }}</p>
    <h3 style="margin: 0.25rem 0 0.25rem 0;">Shopitech</h3>
    <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">{{ t('Kleingewerbe (Weblösungen)', 'Small business (web solutions)') }}</p>
    <p style="line-height: 1.8; margin: 0; font-size: 0.95rem; opacity: 0.9;">
      {{ t(
        'Mein Kleingewerbe, mit dem ich individuelle Weblösungen für eine handvoll Kunden umsetze – u.a. für meine Schwiegereltern und zuletzt eine Restaurant-Webseite: www.mango-thai.de.',
        'My small business where I build custom web solutions for a handful of clients — including my in-laws and recently a restaurant website: www.mango-thai.de.'
      ) }}
    </p>
  </div>
</div>

<!-- Infokom -->
<div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 2rem;">
  <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
  <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2023 – 2025</p>
  <h3 style="margin: 0.25rem 0 0.25rem 0;">{{ t('Softwareentwickler', 'Software Developer') }}</h3>
  <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">Infokom GmbH</p>
  <p style="line-height: 1.8; margin: 0 0 0.75rem 0;">
    {{ t(
      'Full-Stack-Webapp für die Finanzbuchhaltung – Verwaltung von Rechnungsdaten für 16 Mitarbeiter. Klingt klein, war aber technisch anspruchsvoll: Bestehende Rechnungsdaten in ein komplett neues Datenbankmodell überführen, ohne dass irgendetwas verloren geht.',
      'Full-stack webapp for financial accounting – managing invoice data for 16 employees. Sounds small, but was technically demanding: migrating existing invoice data into a completely new database model without losing anything.'
    ) }}
  </p>
  <p style="line-height: 1.8; margin: 0 0 0.75rem 0;">
    {{ t(
      'Zwei Jahre intensiv mit Vaadin und E-Rechnungen. Agiles Arbeiten nach Scrum mit Pair Programming und Code Reviews aus der Extreme-Programming-Schule. Diese Erfahrung war der direkte Auslöser für Tinybill.',
      'Two years of intensive work with Vaadin and e-invoicing. Agile work with Scrum, pair programming and code reviews from the XP school. This experience directly inspired Tinybill.'
    ) }}
  </p>
  <p style="line-height: 1.8; margin: 0; font-size: 0.9rem; opacity: 0.8;">
    {{ t('Lektion: Man unterschätzt immer, wie komplex Rechnungsdaten sind. Steuersätze, Rundungsdifferenzen, länderspezifische Formate – da steckt mehr drin als man denkt.', 'Lesson: you always underestimate how complex invoice data is. Tax rates, rounding differences, country-specific formats – more to it than meets the eye.') }}
  </p>
</div>

<!-- abas -->
<div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 2rem;">
  <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
  <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2019 – 2023</p>
  <h3 style="margin: 0.25rem 0 0.25rem 0;">{{ t('Webentwickler + Ausbildung', 'Web Developer + Apprenticeship') }}</h3>
  <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.75rem 0;">abas Software GmbH ({{ t('heute', 'now') }}: Forterro)</p>
  <p style="line-height: 1.8; margin: 0 0 0.75rem 0;">
    {{ t(
      'Hier hat alles angefangen. Duale Ausbildung zum Fachinformatiker Anwendungsentwicklung an der Heinrich-Hertz-Schule Karlsruhe, abgeschlossen 2022. Java, Spring Boot, Webanwendungen, Microservice-Architekturen – das Fundament, auf dem alles aufbaut.',
      'Where it all started. Dual apprenticeship as an IT specialist for application development at Heinrich-Hertz-Schule Karlsruhe, completed 2022. Java, Spring Boot, web apps, microservices – the foundation for everything.'
    ) }}
  </p>
  <p style="line-height: 1.8; margin: 0; font-size: 0.9rem; opacity: 0.8;">
    {{ t('Hier habe ich gelernt, dass es nicht reicht, Code zu schreiben der funktioniert – er muss auch in sechs Monaten noch verständlich sein.', 'This is where I learned that working code isn\'t enough – it also needs to be understandable six months from now.') }}
  </p>
</div>

<!-- Fach-Abitur -->
<div style="position: relative; padding: 1.5rem 1.5rem 1.5rem 2.25rem; border-left: 3px solid var(--vp-c-text-3); margin-bottom: 1.5rem;">
  <div style="position: absolute; left: -0.55rem; top: 1.5rem; width: 0.85rem; height: 0.85rem; background: var(--vp-c-text-3); border-radius: 50%;"></div>
  <p style="font-size: 0.8rem; opacity: 0.5; margin: 0;">2019</p>
  <h3 style="margin: 0.25rem 0 0.25rem 0;">{{ t('Fach-Abitur BWL/VWL', 'Specialized Abitur in Business') }}</h3>
  <p style="font-weight: 600; opacity: 0.7; margin: 0 0 0.5rem 0;">Ludwig-Erhard {{ t('Gymnasium', 'School') }}, Karlsruhe</p>
  <p style="line-height: 1.8; margin: 0; font-size: 0.9rem; opacity: 0.8;">
    {{ t('BWL-Hintergrund trifft Softwareentwicklung – das hilft tatsächlich, wenn es darum geht, Geschäftsprozesse technisch umzusetzen.', 'Business background meets software development – actually helps when translating business processes into technical solutions.') }}
  </p>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- TECH STACK – INTERAKTIVE KATEGORIEN                            -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2 id="tech-stack">{{ t('Womit ich arbeite', 'What I work with') }}</h2>

<p style="line-height: 1.8; margin-bottom: 0.75rem;">
  {{ t(
    'Keine endlose Buzzword-Liste. Stattdessen drei ehrliche Kategorien: Was ich täglich einsetze, was ich solide kann und was ich gerade aktiv lerne. So weißt du direkt, was du erwarten kannst.',
    'No endless buzzword list. Instead, three honest categories: what I use daily, what I know solidly, and what I\'m actively learning. So you know exactly what to expect.'
  ) }}
</p>

<div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
  <button @click="activeCategory = 'daily'" :style="{ padding: '0.45rem 1rem', borderRadius: '2rem', border: '1px solid ' + (activeCategory === 'daily' ? 'var(--vp-c-brand)' : 'var(--vp-c-divider)'), background: activeCategory === 'daily' ? 'var(--vp-c-brand-soft)' : 'var(--vp-c-bg-soft)', color: 'var(--vp-c-text-1)', cursor: 'pointer', fontWeight: activeCategory === 'daily' ? '600' : '400', fontSize: '0.9rem', transition: 'all 0.2s ease' }">
    {{ t('🔥 Täglich im Einsatz', '🔥 Daily drivers') }}
  </button>
  <button @click="activeCategory = 'solid'" :style="{ padding: '0.45rem 1rem', borderRadius: '2rem', border: '1px solid ' + (activeCategory === 'solid' ? 'var(--vp-c-brand)' : 'var(--vp-c-divider)'), background: activeCategory === 'solid' ? 'var(--vp-c-brand-soft)' : 'var(--vp-c-bg-soft)', color: 'var(--vp-c-text-1)', cursor: 'pointer', fontWeight: activeCategory === 'solid' ? '600' : '400', fontSize: '0.9rem', transition: 'all 0.2s ease' }">
    {{ t('💪 Solide Kenntnisse', '💪 Solid knowledge') }}
  </button>
  <button @click="activeCategory = 'learning'" :style="{ padding: '0.45rem 1rem', borderRadius: '2rem', border: '1px solid ' + (activeCategory === 'learning' ? 'var(--vp-c-brand)' : 'var(--vp-c-divider)'), background: activeCategory === 'learning' ? 'var(--vp-c-brand-soft)' : 'var(--vp-c-bg-soft)', color: 'var(--vp-c-text-1)', cursor: 'pointer', fontWeight: activeCategory === 'learning' ? '600' : '400', fontSize: '0.9rem', transition: 'all 0.2s ease' }">
    {{ t('🌱 Am Lernen', '🌱 Learning') }}
  </button>
</div>

<!-- TÄGLICH -->
<div v-show="activeCategory === 'daily'" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">☕ Java & Spring Boot</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Damit verdiene ich mein Geld – seit 2019. Spring Boot ist für mich wie eine zweite Muttersprache. REST-APIs, Hibernate, Security, Microservices – das ist der Kern meiner täglichen Arbeit. Bei jeder Stelle war Java/Spring die Basis.', 'This is how I make a living – since 2019. Spring Boot is like a second language to me. REST APIs, Hibernate, Security, microservices – the core of my daily work. At every job, Java/Spring has been the foundation.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🗄️ PostgreSQL & MySQL</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Relationale Datenbanken sind mein Alltag. Datenbankdesign, komplexe Queries, Migrationen – bei der Infokom habe ich ein komplettes Rechnungssystem in ein neues Datenbankmodell überführt. Bei Hellmann arbeite ich täglich mit Daten aus dem AS400.', 'Relational databases are my everyday. Database design, complex queries, migrations – at Infokom I migrated an entire invoicing system into a new data model. At Hellmann, I work with AS400 data daily.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">📐 Git, CI/CD & Conventional Commits</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Saubere Git-History ist für mich nicht verhandelbar. Conventional Commits, Merge Requests, Code Reviews bei jedem PR. GitLab CI, Jenkins, Azure DevOps – je nach Projekt. Das ist die Grundlage für Zusammenarbeit.', 'A clean git history is non-negotiable for me. Conventional commits, merge requests, code reviews on every PR. GitLab CI, Jenkins, Azure DevOps – depending on the project. The foundation for collaboration.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🧹 Clean Code & SOLID</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('KISS, DRY, SOLID – keine Begriffe die ich in Interviews nenne, sondern Prinzipien die ich täglich anwende. Methoden kurz, Klassen fokussiert, Abhängigkeiten klar. Nicht aus Dogma, sondern weil ich meinen eigenen Code in drei Monaten noch verstehen will.', 'KISS, DRY, SOLID – not terms I drop in interviews, but principles I apply daily. Short methods, focused classes, clear dependencies. Not dogma, but because I want to understand my own code three months from now.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🏗️ Microservices & REST</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Microservice-Architekturen entwerfen und umsetzen gehört seit abas zu meinem Alltag. Saubere API-Verträge, Service-Kommunikation, Fehlerhandling – und das Wissen, wann ein Monolith die bessere Wahl ist.', 'Designing and implementing microservice architectures has been my daily work since abas. Clean API contracts, service communication, error handling – and knowing when a monolith is the better choice.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🐧 Linux & Server-Administration</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Mein Entwicklungsumfeld läuft auf Linux. Terminal ist mein Zuhause, Serverkonfiguration kenne ich, regelmäßige Deployments auf Linux-Servern gehören dazu.', 'My dev environment runs on Linux. Terminal is home, I know server config, and regular deployments to Linux servers are part of the routine.') }}</p>
  </div>
</div>

<!-- SOLIDE -->
<div v-show="activeCategory === 'solid'" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">💚 Vue.js</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Mein liebstes Frontend-Framework. Dieses Portfolio läuft auf VitePress (Vue-basiert). Vue war mein Einstieg in modernes Frontend und bleibt mein Favorit.', 'My favorite frontend framework. This portfolio runs on VitePress (Vue-based). Vue was my entry into modern frontend and remains my favorite.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">⚛️ React & Next.js</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Für private Projekte: React mit Next.js – schnell deploybar via Vercel, riesiges Ökosystem. Nicht mein tägliches Werkzeug im Beruf, aber solide einsetzbar.', 'For personal projects: React with Next.js – quick to deploy via Vercel, huge ecosystem. Not my daily tool at work, but solidly usable.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🎨 Vaadin</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Zwei Jahre intensiv bei Infokom. Java-Backend direkt mit Frontend verbunden – ideal für interne Business-Apps. Tinybill v1 basiert komplett darauf. Unterschätztes Framework.', 'Two years intensive at Infokom. Java backend directly connected to frontend – ideal for internal business apps. Tinybill v1 is built on it. Underrated framework.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🐳 Docker & Kubernetes</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Container konfigurieren, Images bauen, K8s-Deployments aufsetzen – das kann ich. Docker nutze ich täglich für lokale Entwicklung. Enterprise-Level Orchestrierung? Da geht noch mehr.', 'Configuring containers, building images, setting up K8s deployments – I can do that. Docker daily for local dev. Enterprise-level orchestration? Still room to grow.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🧪 TDD & Testing</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('JUnit, Mockito, Integrationstests – ich teste nicht erst am Ende, sondern während der Entwicklung. Nicht perfekt, aber konsequent.', 'JUnit, Mockito, integration tests – I test during development, not just at the end. Not perfect, but consistent.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">📝 TypeScript, HTML5, CSS/SCSS</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Die Frontend-Grundlagen. Kein Designer, aber ich baue saubere, funktionierende Frontends. TypeScript in allen Frontend-Projekten – vanilla JS vermeide ich.', 'The frontend fundamentals. Not a designer, but I build clean, functional frontends. TypeScript in all frontend projects – I avoid vanilla JS.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">☁️ Microsoft Azure</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Azure DevOps für CI/CD, grundlegendes Verständnis der Cloud-Services. Kein Cloud-Architekt, aber Pipelines aufsetzen und pflegen – das sitzt.', 'Azure DevOps for CI/CD, basic understanding of cloud services. Not a cloud architect, but setting up and maintaining pipelines – that I can do.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🔒 Security & Auth</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Spring Security, OAuth2, JWT – Authentifizierung und Autorisierung sind Teil jedes meiner Backend-Projekte. Sicherheit als Architektur-Entscheidung, nicht als Afterthought.', 'Spring Security, OAuth2, JWT – auth is part of every backend project. Security as an architecture decision, not an afterthought.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">📊 Hibernate & JPA</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('ORM gehört zu meinem Spring-Boot-Alltag. Entity-Mapping, Lazy Loading, Query-Optimierung – ich weiß, wo die Fallstricke liegen und wie man performant mit JPA arbeitet.', 'ORM is part of my Spring Boot daily work. Entity mapping, lazy loading, query optimization – I know the pitfalls and how to work performantly with JPA.') }}</p>
  </div>
</div>

<!-- AM LERNEN -->
<div v-show="activeCategory === 'learning'" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-brand); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🟣 Kotlin</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Mein aktuelles Lernprojekt. Tinybill v2 schreibe ich komplett in Kotlin – der beste Weg eine Sprache zu lernen: sie in einem echten Projekt einsetzen. Kotlin fühlt sich an wie Java, das endlich erwachsen geworden ist.', 'My current learning project. Tinybill v2 is written entirely in Kotlin – the best way to learn a language: use it in a real project. Kotlin feels like Java that finally grew up.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-brand); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🅰️ Angular</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Erstkontakt bei Hellmann. Nach Jahren mit Vue und React ist Angular eine andere Welt – opinionated, strukturiert, mächtig. Lerne es on-the-job.', 'First contact at Hellmann. After years with Vue and React, Angular is a different world – opinionated, structured, powerful. Learning it on the job.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-brand); background: var(--vp-c-bg-soft);">
    <h4 style="margin: 0 0 0.35rem 0;">🏗️ API-first & Headless</h4>
    <p style="font-size: 0.85rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Mit Tinybill v2 baue ich bewusst headless: Backend als reine API, Frontend entkoppelt. Ziel: Ein Backend das mit jedem Frontend funktioniert – ob Angular, React oder Shopify-Plugin.', 'With Tinybill v2, I\'m building headless by design: backend as pure API, frontend decoupled. Goal: a backend that works with any frontend – Angular, React, or Shopify plugin.') }}</p>
  </div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WIE ICH ARBEITE                                                -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2>{{ t('Wie ich arbeite', 'How I work') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1.5rem; opacity: 0.85;">
  {{ t('Technologie ist wichtig, aber wie jemand arbeitet sagt oft mehr aus als sein Tech-Stack.', 'Technology matters, but how someone works often says more than their tech stack.') }}
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <p style="font-size: 1.5rem; margin: 0;">🤝</p>
    <h4 style="margin: 0.5rem 0 0.5rem 0;">{{ t('Direkte Kommunikation', 'Direct communication') }}</h4>
    <p style="font-size: 0.9rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Ich bevorzuge Gespräche gegenüber Nachrichten. Fünf Minuten persönlich lösen Probleme, über die man sonst stundenlang schreibt. Zum Schreibtisch gehen statt drei Slack-Nachrichten schicken – das ist mein Stil.', 'I prefer conversations over messages. Five minutes in person solves problems that would otherwise take hours of typing. Walking to the desk instead of sending three Slack messages – that\'s my style.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <p style="font-size: 1.5rem; margin: 0;">📏</p>
    <h4 style="margin: 0.5rem 0 0.5rem 0;">{{ t('Qualität als Standard', 'Quality as standard') }}</h4>
    <p style="font-size: 0.9rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Vier-Augen-Prinzip bei jedem Merge Request. Nicht aus Bürokratie – es fängt Fehler, verbreitet Wissen im Team und hält die Codebase konsistent. Conventional Commits und saubere History sind die Grundlage.', 'Four-eyes principle on every merge request. Not bureaucracy – it catches bugs, spreads knowledge, and keeps the codebase consistent. Conventional commits and clean history are the foundation.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <p style="font-size: 1.5rem; margin: 0;">🔄</p>
    <h4 style="margin: 0.5rem 0 0.5rem 0;">{{ t('Scrum & XP', 'Scrum & XP') }}</h4>
    <p style="font-size: 0.9rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Pair Programming, inkrementelle Entwicklung, kurze Feedback-Loops. Zu viel Meeting-Overhead nervt mich – aber ich habe gelernt, dass ein gewisses Maß an Prozess notwendig ist.', 'Pair programming, incremental development, short feedback loops. Too much meeting overhead annoys me – but I\'ve learned some process is necessary.') }}</p>
  </div>
  <div style="padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <p style="font-size: 1.5rem; margin: 0;">🧠</p>
    <h4 style="margin: 0.5rem 0 0.5rem 0;">{{ t('Ehrlichkeit', 'Honesty') }}</h4>
    <p style="font-size: 0.9rem; line-height: 1.7; opacity: 0.85; margin: 0;">{{ t('Ich sage wenn ich etwas nicht weiß. Ich sage wenn eine Deadline unrealistisch ist. Ich sage wenn Code schlecht ist – auch meiner. Offenheit bringt ein Team weiter als Perfektion.', 'I\'ll say when I don\'t know something. When a deadline is unrealistic. When code is bad – mine included. Openness moves a team further than perfection.') }}</p>
  </div>
</div>

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- PROJEKTE                                                       -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2 id="projekte">{{ t('Projekte', 'Projects') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1.5rem; opacity: 0.85;">
  {{ t('Neben dem Beruf baue ich Dinge, die mir Spaß machen – und manchmal sogar anderen nützen.', 'Outside of work, I build things that are fun – and sometimes even useful to others.') }}
</p>

<!-- TINYBILL -->
<div id="tinybill" style="border-radius: 0.75rem; border: 1px solid var(--vp-c-brand); margin-bottom: 2rem; overflow: hidden;">
  <img src="/images/tinybill-screenshot.png" alt="Tinybill Screenshot" style="width: 100%; max-height: 700px; object-fit: cover; object-position: top; border-bottom: 1px solid var(--vp-c-divider);" />
  <div style="padding: 1.5rem;">
    <h3 style="margin: 0 0 0.25rem 0;">Tinybill</h3>
    <p style="font-size: 0.85rem; opacity: 0.6; margin: 0 0 1rem 0;">{{ t('Dokumentengenerator – kostenlos nutzbar', 'Document generator – free to use') }}</p>
    <p style="line-height: 1.8; margin: 0 0 1rem 0;">
      {{ t(
        'Tinybill ist aus meiner Zeit bei der Infokom entstanden. Zwei Jahre E-Rechnungen und Vaadin – und das Wissen, das ich dort aufgebaut habe, wollte ich nicht liegen lassen. Also habe ich einen kostenlosen Dokumentengenerator für Rechnungen, Angebote und Geschäftsdokumente gebaut.',
        'Tinybill was born from my time at Infokom. Two years of e-invoicing and Vaadin – and I didn\'t want to let the knowledge I built there go to waste. So I built a free document generator for invoices, quotes, and business documents.'
      ) }}
    </p>
    <div style="padding: 1.25rem; border-radius: 0.5rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); margin-bottom: 1rem;">
      <h4 style="margin: 0 0 0.5rem 0;">🚀 Tinybill v2</h4>
      <p style="font-size: 0.9rem; line-height: 1.8; margin: 0 0 0.5rem 0;">
        {{ t(
          'Version 2: Komplett in Kotlin, API-first, headless. Kein monolithisches Frontend mehr. Geplant: Shopify-Plugin, Angular-Frontend, offene API. Mein Trainingsfeld für Kotlin.',
          'Version 2: entirely in Kotlin, API-first, headless. No more monolithic frontend. Planned: Shopify plugin, Angular frontend, open API. My Kotlin training ground.'
        ) }}
      </p>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
      <a href="https://tinybill.de" target="_blank" rel="noopener" style="padding: 0.5rem 1rem; border-radius: 2rem; background: var(--vp-c-brand); color: var(--vp-c-bg); text-decoration: none; font-weight: 600; font-size: 0.9rem;">{{ t('Zu Tinybill →', 'Visit Tinybill →') }}</a>
      <span style="font-size: 0.85rem; opacity: 0.5;">{{ t('~ 2–5 Stunden / Woche', '~ 2–5 hours / week') }}</span>
    </div>
  </div>
</div>

<!-- SHOPITECH + MERKELFY -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
  <div style="padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h3 style="margin: 0 0 0.25rem 0;">🛍️ Shopitech</h3>
    <p style="font-size: 0.85rem; opacity: 0.6; margin: 0 0 0.75rem 0;">{{ t('Kleingewerbe seit 2023', 'Small business since 2023') }}</p>
    <p style="font-size: 0.9rem; line-height: 1.7; margin: 0 0 0.75rem 0;">{{ t('Webanwendungen, Integrationen und Tools für ausgewählte Kunden. Tinybill ist das Hauptprojekt.', 'Web apps, integrations and tools for select clients. Tinybill is the main project.') }}</p>
    <a href="https://shopitech.de" target="_blank" rel="noopener" style="font-size: 0.9rem;">shopitech.de →</a>
  </div>
  <div style="padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);">
    <h3 style="margin: 0 0 0.25rem 0;">🎭 Merkelfy</h3>
    <p style="font-size: 0.85rem; opacity: 0.6; margin: 0 0 0.75rem 0;">{{ t('Spaßprojekt', 'Fun project') }}</p>
    <p style="font-size: 0.9rem; line-height: 1.7; margin: 0 0 0.75rem 0;">{{ t('Nicht jedes Projekt muss die Welt verändern. Manchmal baut man etwas weil es Spaß macht.', 'Not every project needs to change the world. Sometimes you build something because it\'s fun.') }}</p>
    <a href="https://merkelfy.dev-arts.de" target="_blank" rel="noopener" style="font-size: 0.9rem;">merkelfy.dev-arts.de →</a>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- SHOPITECH PROJEKTE                                             -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2 id="shopitech-projekte">{{ t('Shopitech Projekte', 'Shopitech projects') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1.25rem; opacity: 0.85;">
  {{ shopitechIntro }}
</p>

<div class="shopitech-grid">

  <div class="shopitech-card">
    <a class="shopitech-link" href="https://cw-baden.de" target="_blank" rel="noopener"></a>
    <h3 style="margin: 0 0 0.25rem 0;">cw-baden.de</h3>
    <p style="margin: 0; opacity: 0.75; line-height: 1.7;">{{ shopitechCard.cw }}</p>
  </div>

  <div class="shopitech-card">
    <a class="shopitech-link" href="https://www.mango-thai.de" target="_blank" rel="noopener"></a>
    <h3 style="margin: 0 0 0.25rem 0;">mango-thai.de</h3>
    <p style="margin: 0; opacity: 0.75; line-height: 1.7;">{{ shopitechCard.mango }}</p>
  </div>

  <div class="shopitech-card">
    <a class="shopitech-link" href="https://www.dein-notruf.de" target="_blank" rel="noopener"></a>
    <h3 style="margin: 0 0 0.25rem 0;">dein-notruf.de</h3>
    <p style="margin: 0; opacity: 0.75; line-height: 1.7;">{{ shopitechCard.notruf }}</p>
  </div>

  <div class="shopitech-card">
    <a class="shopitech-link" href="https://tinybill.de" target="_blank" rel="noopener"></a>
    <h3 style="margin: 0 0 0.25rem 0;">tinybill.de</h3>
    <p style="margin: 0; opacity: 0.75; line-height: 1.7;">{{ shopitechCard.tinybill }}</p>
  </div>

</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- PERSÖNLICHES                                                   -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2>{{ t('Abseits vom Code', 'Beyond the code') }}</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; margin-bottom: 1.5rem;">
  <div>
    <p style="line-height: 1.8; margin: 0 0 1rem 0;">
      {{ t(
        'Geselliger Mensch, kleiner aber treuer Freundeskreis, mit dem ich viel unternehme. Seit April 2025 haben meine Freundin und ich eine gemeinsame Wohnung – unser größtes Projekt neben dem Code. Wer schon mal renoviert hat weiß: Das ist Projektmanagement in Reinform.',
        'Social person, small but loyal circle of friends that I spend a lot of time with. Since April 2025, my girlfriend and I have our own apartment – our biggest project aside from code. Anyone who\'s renovated knows: that\'s project management in its purest form.'
      ) }}
    </p>
    <p style="line-height: 1.8; margin: 0;">
      {{ t(
        'Außerdem: Videografie (filmen & schneiden), Story-Games (aktuell: The Last of Us Part II), gute Serien. Gute Geschichten faszinieren mich – egal ob in Spielen, Serien oder Filmen.',
        'Also: videography (filming & editing), story games (currently: The Last of Us Part II), great series. Good stories fascinate me – whether in games, series, or films.'
      ) }}
    </p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <img src="/images/me-and-selina.jpeg" alt="Arthur und Selina" style="border-radius: 0.75rem; width: 100%; max-height: 420px; object-fit: cover; border: 1px solid var(--vp-c-divider);" />
    <img src="/images/apartment.jpeg" alt="Die Wohnung" style="border-radius: 0.75rem; width: 100%; max-height: 420px; object-fit: cover; border: 1px solid var(--vp-c-divider);" />
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- WORKSPACE                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2>{{ t('Wo der Code entsteht', 'Where the code happens') }}</h2>

<img src="/images/workspace.jpeg" alt="Mein Workspace" style="border-radius: 0.75rem; width: 100%; max-height: 1000px; object-fit: cover; border: 1px solid var(--vp-c-divider); margin-bottom: 1rem;" />

<p style="line-height: 1.8; opacity: 0.7; font-size: 0.9rem;">
  {{ t('Hier entstehen Tinybill, Shopitech-Projekte und manchmal auch ein nächtlicher Refactor, der niemandem etwas bringt, aber sich gut anfühlt.', 'This is where Tinybill, Shopitech projects, and the occasional midnight refactor that helps nobody but feels satisfying are born.') }}
</p>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- GITHUB                                                         -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h3>{{ t('Meine GitHub Profile', 'My GitHub profiles') }}</h3>

<VPTeamMembers size="small" :members="members" />

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- KONTAKT                                                        -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<h2 id="kontakt">{{ t('Kontakt', 'Contact') }}</h2>

<p style="line-height: 1.8; margin-bottom: 1.25rem;">
  {{ t('Ich freue mich über Nachrichten – ob Jobangebot, Projektidee oder einfach ein gutes Gespräch unter Entwicklern.', 'I\'d love to hear from you – whether it\'s a job offer, project idea, or just a good conversation between developers.') }}
</p>

<div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem;">
  <a href="mailto:Arthur.Schimpf@gmx.de" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1.25rem; border-radius: 0.5rem; border: 1px solid var(--vp-c-brand); text-decoration: none; color: var(--vp-c-text-1); font-weight: 600; background: var(--vp-c-brand-soft); font-size: 0.9rem;">
    📧 Arthur.Schimpf@gmx.de
  </a>
</div>

<!-- DEVELOPER MODE EASTER EGG -->
<div v-if="developerModeEnabled" style="margin-top: 1rem; padding: 1.25rem; border-radius: 0.75rem; border: 1px dashed var(--vp-c-brand); background: var(--vp-c-bg-soft); font-family: monospace; font-size: 0.85rem; line-height: 1.8;">
  <p style="font-weight: bold; margin-bottom: 0.5rem;">🎮 {{ t('Developer Mode aktiviert!', 'Developer Mode activated!') }}</p>
  <p v-for="(log, i) in devLogs[lang]" :key="i" style="margin: 0.15rem 0; opacity: 0.85;">{{ log }}</p>
  <p style="margin-top: 0.75rem; opacity: 0.5;">{{ t('↑↑↓↓←→←→BA – Du kennst dich aus. Respekt.', '↑↑↓↓←→←→BA – You know your stuff. Respect.') }}</p>
</div>


<style>
.shopitech-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:1rem;
  margin-bottom:2rem;
}

.shopitech-card{
  position:relative;
  padding:1.25rem;
  border-radius:0.75rem;
  border:1px solid var(--vp-c-divider);
  background:var(--vp-c-bg-soft);
  transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
}

.shopitech-card:hover{
  cursor:pointer;
  transform:translateY(-3px);
  border-color:color-mix(in srgb, var(--vp-c-brand) 40%, var(--vp-c-divider));
  box-shadow:0 10px 30px rgba(0,0,0,.08);
  background:color-mix(in srgb, var(--vp-c-bg-soft) 85%, var(--vp-c-brand-soft));
}

.shopitech-link{
  position:absolute;
  inset:0;
  border-radius:0.75rem;
  text-decoration:none;
}
</style>