import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'de-DE',
    title: 'Dev Arts Softwareentwickler',
    description: 'Portfolio von Dev Arts',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        siteTitle: 'Dev Arts Software Developer',
        logo: '/logo.png',
        nav: [],
        sidebar: {
            '/': [
                {
                    text: 'Allgemein',
                    items: [
                        { text: 'Start', link: '/' },
                    ]
                }
            ]
        }
    }
})