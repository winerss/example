import Vue from 'vue'
import Router from 'vue-router'
import pageone from '@/components/pageone'
import pagetwo from '@/components/pagetwo'
import pagethree from '@/components/pagethree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageone',
      component: pageone
    },
    {
      path: '/two',
      name: 'pagetwo',
      component: pagetwo
    },
    {
      path: '/three',
      name: 'pagethree',
      component: pagethree,
      meta: {
        needLogin: true
      }
    }
  ]
})
