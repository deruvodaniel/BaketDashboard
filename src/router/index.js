import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import NewPractice from '../views/NewPractice.vue'
import Team from '../views/Team.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/NewPractice',
    name: 'newPracice',
    component: NewPractice
  },

  {
    path: '/team',
    name: 'Team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
