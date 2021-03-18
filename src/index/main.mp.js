import {createApp as bbb} from 'vue'
import App from './App.vue'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)
  const app = bbb(App)
  app.component('WxAnimation', {
    template: '<div></div>'
  })
  app.mount('#app')
  window.addEventListener('wxunload', () => app.unmount('#app'))
}
