import DefaultTheme from 'vitepress/theme'
import sandpack from './components/sandpack.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('sandpack', sandpack)
  }
}
