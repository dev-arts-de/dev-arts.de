import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'de-DE',
  title: 'Arthur Schimpf',
  description: 'Softwareentwickler aus Karlsruhe – Java, Spring Boot, Kotlin.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1a3a5c' }],
    ['meta', { name: 'author', content: 'Arthur Schimpf' }],
    ['meta', { property: 'og:title', content: 'Arthur Schimpf – Softwareentwickler' }],
    ['meta', { property: 'og:description', content: 'Softwareentwickler aus Karlsruhe. Java, Spring Boot, Kotlin.' }],
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
      copyright: 'Arthur Schimpf · Karlsruhe'
    },
    editLink: undefined,
    lastUpdated: false,
  }
})
