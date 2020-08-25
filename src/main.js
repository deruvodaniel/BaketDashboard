import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import AddPlayer from './components/AddPlayer'
import BestShooters from './components/BestShooters'
import Practice from './components/Practice'
import TeamStatistics from './components/TeamStatistics'
import TeamTable from './components/TeamTable'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component('AddPlayer', AddPlayer);
Vue.component('BestShooters', BestShooters);
Vue.component('Practice', Practice);
Vue.component('TeamStatistics', TeamStatistics);
Vue.component('TeamTable', TeamTable);



// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter)
