import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './404-error/NotFound.vue'
import About from './about/About.vue'
import Contact from './contact/Contact.vue'
import Home from './home/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' },
    { path: '*', component: NotFound }
  ]
})

export default router
