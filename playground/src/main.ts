import { createApp } from "@vue/runtime-dom"
import PerfectScrollbar from "vue3-perfect-scrollbar"
import Uniland, { uniland } from "@uniland-ui/vue"
import { domElements } from "@uniland-ui/system"
import { MotionPlugin } from "@vueuse/motion"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)
  .use(router)
  .use(MotionPlugin)
  .use(Uniland)
  .use(PerfectScrollbar)

domElements.forEach((tag) => {
  app.component(`uniland.${tag}`, uniland(tag))
})

app.mount("#app")
