import Vue from 'vue'
import AppLayout from './app/Layout.vue'
import router from './router'

// import VueCarousel from 'vue-carousel'
// Vue.use(VueCarousel)

const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
