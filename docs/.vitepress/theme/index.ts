import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from './components/demo-container.vue'
import './styles/vars.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('demo-container', DemoContainer)
  }
}

export default theme
