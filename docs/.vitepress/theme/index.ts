import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import NotFound from './NotFound.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
    })
  },
}
