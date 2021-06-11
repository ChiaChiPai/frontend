import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import type { DirectiveBinding } from 'vue'
import App from './App.vue'

// css
import 'virtual:windi.css'
import './style/main.css'

// plugins
import './plugins/vee-validate'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.directive('close', {
  mounted(
    el: HTMLElement,
    binding: DirectiveBinding,
    vnode: any,
  ): void {
    const handleOutsideClick = (e: Event) => {
      e.stopPropagation()

      const { handler } = binding.value
      const refs: any = []
      vnode.children.forEach((el: any) => {
        if (el.ref) refs.push(el.ref.r)
      })

      if (!el.contains(<Node>e.target)) {
        vnode.ref.i.ctx[handler]()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },

  unmounted() {
    document.onclick = null
    document.ontouchstart = null
  },
})
app.mount('#app')
