import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

// css
import 'virtual:windi.css'
import './style/vars.css'
import './style/main.css'

// plugins
import './plugins/vee-validate'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
