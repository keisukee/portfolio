import Vue from 'vue'
import Router from 'vue-router'

import top from '@/components/top'
import about from '@/components/about'
import experiences from '@/components/experiences'
import works from '@/components/works'
import skills from '@/components/skills'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
})
