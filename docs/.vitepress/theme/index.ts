import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import { h } from 'vue'
import './custom.css'
import './styles/cv.css'
import './styles/not-found.css'
import './styles/print.css'
import NotFound from './NotFound.vue'
import MailLink from './components/MailLink.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('MailLink', MailLink)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('no-js')
    }
  },
}
