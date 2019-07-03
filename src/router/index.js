import Vue from 'vue'
import Router from 'vue-router'

import top from '@/components/top'
import about from '@/components/about'
import experiences from '@/components/experiences'
import works from '@/components/works'
import skills from '@/components/skills'
import sns from '@/components/sns'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/experiences',
      component: experiences
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/skills',
      component: skills
    },
    {
      path: '/sns',
      component: sns
    },
    {
      path: '/contact',
      component: contact
    }

  ]
})
