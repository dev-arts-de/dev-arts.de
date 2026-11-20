import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import { h } from 'vue'

import '@fontsource-variable/bricolage-grotesque/standard.css'
import '@fontsource-variable/source-serif-4/opsz.css'
import '@fontsource-variable/source-serif-4/opsz-italic.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/pages.css'
import './styles/not-found.css'
import './styles/print.css'

import NotFound from './NotFound.vue'
import MailLink from './components/MailLink.vue'
import HomeHero from './components/HomeHero.vue'
import ProjectIndex from './components/ProjectIndex.vue'
import ProjectHeader from './components/ProjectHeader.vue'
import ProjectPager from './components/ProjectPager.vue'
import CvStation from './components/CvStation.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    const isProjectPage = (): boolean => typeof frontmatter.value.gruppe === 'string'

    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
      'doc-before': () => (isProjectPage() ? h(ProjectHeader) : null),
      'doc-after': () => (isProjectPage() ? h(ProjectPager) : null),
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('MailLink', MailLink)
    app.component('HomeHero', HomeHero)
    app.component('ProjectIndex', ProjectIndex)
    app.component('CvStation', CvStation)
  },
}
