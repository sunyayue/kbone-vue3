import {createApp as bbb} from 'vue'
import App from './App.vue'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)
const app = bbb(App).mount('#app')
window.addEventListener('beforeunload', () => app.unmount('#app'))

