import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './screens/App.vue'
import Home from './screens/Home.vue'
import Post from './screens/Post.vue'
import View from './screens/View.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/post/:id', component: Post },
      { path: '/view/:id', component: View },
      { path: '*', redirect: '/' }
    ]
  }),
  render: h => h(App)
}).$mount('#app')
