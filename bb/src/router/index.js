import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aa from '@/components/aa'
import sgjq from '@/components/sgjq'
import AlbanKnights from '@/components/AlbanKnights'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'aa',
      component: aa
    },
    {
      path: '/sgjq',
      name: 'sgjq',
      component: sgjq
    },
    {
      path: '/alban-knights',
      name: 'AlbanKnights',
      component: AlbanKnights
    }
  ]
})
