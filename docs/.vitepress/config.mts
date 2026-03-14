import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'de-DE',
  title: 'Arthur Schimpf',
  description: 'Softwareentwickler aus Karlsruhe – Java, Spring Boot, Kotlin.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1e4168' }],
    ['meta', { name: 'author', content: 'Arthur Schimpf' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dev-arts.de' }],
    ['meta', { property: 'og:title', content: 'Arthur Schimpf – Softwareentwickler' }],
    ['meta', { property: 'og:description', content: 'Softwareentwickler aus Karlsruhe. Java, Spring Boot, Kotlin. Seit 2019.' }],
    ['meta', { property: 'og:image', content: 'https://dev-arts.de/images/me-portfolio.jpeg' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Arthur Schimpf – Softwareentwickler' }],
    ['meta', { name: 'twitter:description', content: 'Softwareentwickler aus Karlsruhe. Java, Spring Boot, Kotlin.' }],
    ['meta', { name: 'twitter:image', content: 'https://dev-arts.de/images/me-portfolio.jpeg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
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
          text: 'Software',
          items: [
            { text: 'TinyBill', link: '/projekte/tinybill' },
            { text: 'Bewerber-Schmiede', link: '/projekte/bewerber-schmiede' },
            { text: 'DailyDev', link: '/projekte/dailydev' },
            { text: 'Foxfolio', link: '/projekte/foxfolio' },
          ]
        },
        {
          text: 'Experimente',
          items: [
            { text: 'Shopitech', link: '/projekte/shopitech' },
            { text: 'dein-notruf.de', link: '/projekte/dein-notruf' },
            { text: 'daily-pi-poetry', link: '/projekte/daily-pi-poetry' },
            { text: 'Merkelfy', link: '/projekte/merkelfy' },
            { text: 'will-you-be-my-valentine', link: '/projekte/will-you-be-my-valentine' },
            { text: 'palmtr.ee', link: '/projekte/palmtree' },
          ]
        },
        {
          text: 'Frühere Projekte',
          items: [
            { text: 'awave', link: '/projekte/awave' },
            { text: 'meme_react_mememory', link: '/projekte/meme-react-mememory' },
            { text: 'java-developedia', link: '/projekte/java-developedia' },
            { text: 'php-developer-roadmap', link: '/projekte/php-developer-roadmap' },
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
      message: '<a href="https://github.com/iqwrwq" target="_blank">github/iqwrwq</a> · <a href="https://github.com/dev-arts-de" target="_blank">github/dev-arts-de</a> · <a href="/impressum">Impressum</a>',
      copyright: 'Arthur Schimpf · Karlsruhe'
    },
    editLink: undefined,
    lastUpdated: false,
  }
})
