import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Dev Arts',
    description: 'Portfolio von Dev Arts',
    lang: 'de-DE',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
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