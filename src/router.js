import Vue from 'vue'
import Router from 'vue-router'
import One from './views/One.vue'
import Tendency from './views/Tendency.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/tendency' },
    {
      path: '/tendency',
      name: 'tendency',
      component: Tendency
    },
    {
      path: '/one/:pid',
      name: 'one',
      component: One
    }
    
  ]
})
