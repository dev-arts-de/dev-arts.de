import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dev-arts.de",
  description: "Arthur Schimpf Softwareentwickler",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Über mich', link: '/#uber-mich' },
      { text: 'Kontakt', link: '/#kontakt' },
    ],
    sidebar: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dev-arts-de' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/arthur-schimpf-832b64240/' }
    ]
  }
})