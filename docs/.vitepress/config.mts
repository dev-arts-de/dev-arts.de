import { defineConfig, type HeadConfig } from 'vitepress'

const SITE_URL = 'https://www.dev-arts.de'
const TITLE = 'Arthur Schimpf'
const TAGLINE = 'Softwareentwickler in Karlsruhe. Java, Spring Boot, CI/CD.'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arthur Schimpf',
  jobTitle: 'Software Engineer',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karlsruhe',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'init SE',
    url: 'https://www.initse.com',
  },
  alumniOf: [
    { '@type': 'Organization', name: 'Hellmann Worldwide Logistics SE & Co. KG' },
    { '@type': 'Organization', name: 'Infokom GmbH' },
    { '@type': 'Organization', name: 'abas Software GmbH' },
    { '@type': 'EducationalOrganization', name: 'Heinrich-Hertz-Schule Karlsruhe' },
  ],
  knowsAbout: [
    'Java', 'Spring Boot', 'Quarkus', 'Kotlin', 'PostgreSQL', 'Kafka',
    'Angular', 'Vue.js', 'TypeScript', 'Docker', 'GitHub Actions',
    'GitLab CI', 'Kubernetes', 'Testcontainers',
  ],
  sameAs: [
    'https://github.com/dev-arts-de',
    'https://github.com/iqwrwq',
    'https://www.linkedin.com/in/arthur-schimpf-832b64240/',
  ],
}

function pageUrl(relativePath: string): string {
  const path = relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
  return `${SITE_URL}/${path}`
}

export default defineConfig({
  transformHead({ pageData }): HeadConfig[] {
    if (pageData.isNotFound) return []
    const url = pageUrl(pageData.relativePath)
    const isHome = pageData.relativePath === 'index.md'
    const title = isHome ? `${TITLE}, Softwareentwickler` : `${pageData.title} | ${TITLE}`
    const description = pageData.description || TAGLINE
    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    ]
  },
  lang: 'de-DE',
  title: TITLE,
  description: TAGLINE,
  cleanUrls: true,
  appearance: true,
  sitemap: { hostname: SITE_URL },
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#eceef0' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#121a21' }],
    ['meta', { name: 'author', content: 'Arthur Schimpf' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(personJsonLd)],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og-cover.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'de_DE' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-cover.png` }],
  ],
  themeConfig: {
    siteTitle: TITLE,
    logo: undefined,
    nav: [
      { text: 'Projekte', link: '/projekte/', activeMatch: '^/projekte' },
      { text: 'Lebenslauf', link: '/lebenslauf' },
      { text: 'Kenntnisse', link: '/kenntnisse' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dev-arts-de', ariaLabel: 'GitHub' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/arthur-schimpf-832b64240/', ariaLabel: 'LinkedIn' },
    ],
    outline: { level: [2, 2], label: 'Auf dieser Seite' },
    docFooter: { prev: false, next: false },
    darkModeSwitchLabel: 'Darstellung',
    lightModeSwitchTitle: 'Helle Darstellung',
    darkModeSwitchTitle: 'Dunkle Darstellung',
    returnToTopLabel: 'Nach oben',
    sidebarMenuLabel: 'Menü',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
          modal: {
            noResultsText: 'Keine Treffer für',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: { selectText: 'öffnen', navigateText: 'wechseln', closeText: 'schließen' },
          },
        },
      },
    },
    footer: {
      message:
        '<a href="https://github.com/dev-arts-de" target="_blank" rel="noopener">GitHub</a> &nbsp; <a href="https://www.linkedin.com/in/arthur-schimpf-832b64240/" target="_blank" rel="noopener">LinkedIn</a> &nbsp; <a href="/impressum">Impressum</a> &nbsp; <a href="/datenschutz">Datenschutz</a>',
      copyright: 'Arthur Schimpf, Karlsruhe',
    },
    lastUpdated: false,
  },
})
