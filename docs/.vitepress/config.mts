import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'de-DE',
    title: 'Dev Arts Softwareentwickler',              // Seitentitel (Tab-Title)
    description: 'Portfolio von Dev Arts',
    themeConfig: {
        siteTitle: 'Dev Arts Software Developer',        // Text links oben in der Navbar
        logo: '/logo.png',            // optional: eigenes Logo links oben
        nav: [
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