import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import LoginForm from '@/components/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginForm
    }
  ]
})
