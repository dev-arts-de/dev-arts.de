import { defineConfig } from 'vitepress'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arthur Schimpf',
  jobTitle: 'Softwareentwickler',
  url: 'https://dev-arts.de',
  image: 'https://dev-arts.de/images/me-portfolio.jpeg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karlsruhe',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'init SE',
    url: 'https://www.init-se.de'
  },
  alumniOf: [
    { '@type': 'Organization', name: 'Hellmann Worldwide Logistics SE' },
    { '@type': 'Organization', name: 'Infokom GmbH' },
    { '@type': 'Organization', name: 'abas Software GmbH' },
    { '@type': 'EducationalOrganization', name: 'Heinrich-Hertz-Schule Karlsruhe' },
    { '@type': 'EducationalOrganization', name: 'Ludwig-Erhard Gymnasium Karlsruhe' }
  ],
  knowsAbout: [
    'Java', 'Spring Boot', 'Kotlin', 'PostgreSQL', 'Kafka',
    'Vue.js', 'Angular', 'Vaadin', 'TypeScript', 'Docker',
    'Kubernetes', 'GitLab CI', 'Testcontainers', 'OpenAPI'
  ],
  sameAs: [
    'https://github.com/iqwrwq',
    'https://github.com/dev-arts-de',
    'https://www.linkedin.com/in/arthur-schimpf-832b64240/'
  ]
}

export default defineConfig({
  lang: 'de-DE',
  title: 'Arthur Schimpf',
  description: 'Softwareentwickler aus Karlsruhe – Java, Spring Boot, Kotlin.',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://dev-arts.de'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1e4168' }],
    ['meta', { name: 'author', content: 'Arthur Schimpf' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(personJsonLd)],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dev-arts.de' }],
    ['meta', { property: 'og:title', content: 'Arthur Schimpf – Softwareentwickler' }],
    ['meta', { property: 'og:description', content: 'Softwareentwickler aus Karlsruhe. Java, Spring Boot, Kotlin. Seit 2019.' }],
    ['meta', { property: 'og:image', content: 'https://dev-arts.de/og-cover.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'de_DE' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Arthur Schimpf – Softwareentwickler' }],
    ['meta', { name: 'twitter:description', content: 'Softwareentwickler aus Karlsruhe. Java, Spring Boot, Kotlin.' }],
    ['meta', { name: 'twitter:image', content: 'https://dev-arts.de/og-cover.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    // Mark <html> as 'no-js' before paint. The class is removed once
    // Vue mounts in enhanceApp() so CSS can fall back to showing the
    // reveal content when JavaScript is unavailable.
    ['script', {}, "document.documentElement.classList.add('no-js');"],
  ],
  themeConfig: {
    siteTitle: 'Arthur Schimpf',
    logo: '/logo.png',
    nav: [
      { text: 'Über mich', link: '/' },
      { text: 'Kenntnisse', link: '/kenntnisse' },
      { text: 'Projekte', link: '/projekte/' },
      { text: 'Lebenslauf', link: '/lebenslauf' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dev-arts-de' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/arthur-schimpf-832b64240/' },
    ],
    sidebar: {
      '/projekte/': [
        {
          text: 'Übersicht',
          items: [
            { text: 'Alle Projekte', link: '/projekte/' },
          ]
        },
        {
          text: 'Projekte',
          items: [
            { text: 'DailyDev', link: '/projekte/dailydev' },
            { text: 'TinyBill', link: '/projekte/tinybill' },
            { text: 'Bewerber-Schmiede', link: '/projekte/bewerber-schmiede' },
            { text: 'Stoistic Forge', link: '/projekte/stoistic-forge' },
            { text: '9thbit', link: '/projekte/9thbit' },
            { text: 'Shopitech', link: '/projekte/shopitech' },
            { text: 'dein-notruf.de', link: '/projekte/dein-notruf' },
            { text: 'daily-pi-poetry', link: '/projekte/daily-pi-poetry' },
            { text: 'Merkelfy', link: '/projekte/merkelfy' },
            { text: 'Foxfolio', link: '/projekte/foxfolio' },
          ]
        },
        {
          text: 'Persönliches',
          items: [
            { text: 'wunschliste-selina.de', link: '/projekte/wunschliste-selina' },
            { text: 'will-you-be-my-valentine', link: '/projekte/will-you-be-my-valentine' },
          ]
        },
        {
          text: 'Frühere Projekte',
          items: [
            { text: 'java-developedia', link: '/projekte/java-developedia' },
            { text: 'php-developer-roadmap', link: '/projekte/php-developer-roadmap' },
            { text: 'meme_react_mememory', link: '/projekte/meme-react-mememory' },
            { text: 'awave', link: '/projekte/awave' },
            { text: 'palmtr.ee', link: '/projekte/palmtree' },
            { text: 'beercraftshop', link: '/projekte/beercraftshop' },
            { text: 'Abschlussarbeit 2022', link: '/projekte/abschlussarbeit' },
          ]
        }
      ]
    },
    search: {
      provider: 'local',
    },
    footer: {
      message: '<a href="https://github.com/iqwrwq" target="_blank">github/iqwrwq</a> · <a href="https://github.com/dev-arts-de" target="_blank">github/dev-arts-de</a> · <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a>',
      copyright: 'Arthur Schimpf · Karlsruhe'
    },
    editLink: undefined,
    lastUpdated: false,
  }
})
