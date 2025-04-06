import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Regist from '../views/Login/regist.vue'
import Forget from '../views/Login/forget.vue'
import Layout from '@/views/Home/layout.vue'
import home from '@/views/Home/index.vue'
import copyManage from '@/views/Home/CopyManage.vue'
import copyright from '@/views/Home/Copyright.vue'
import doubleCreat from '@/views/Home/DoubleCreat.vue'
import doubleManage from '@/views/Home/DoubleManage.vue'
import match from '@/views/Home/Match.vue'
import matchManage from '@/views/Home/MatchManage.vue'
import science from '@/views/Home/Science.vue'
import scienceManage from '@/views/Home/ScienceManage.vue'
import sendTest from '@/views/Home/SendTest.vue'
import testManage from '@/views/Home/TestManage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
{
  path: '/layout',
  name: 'Layout',
  component: Layout,
  children:[
    {
      path: '',
      name: 'zhuye',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/match',
      name: 'match',
      component: match
    },
    {
      path: '/matchMaunage',
      name: 'matchstar',
      component: matchManage
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: copyright
    },
    {
      path: '/copyManage',
      name: 'copyManage',
      component: copyManage
    },
    {
      path: '/doubleCreat',
      name: 'doubleCreat',
      component: doubleCreat
    },
    {
      path: '/doubleManage',
      name: 'doubleManage',
      component: doubleManage
    },
    {
      path: '/science',
      name: 'science',
      component: science
    },
    {
      path: '/scienceManage',
      name: 'scienceManage',
      component:scienceManage
    },
    {
      path: '/sendTest',
      name: 'sendTest',
      component: sendTest
    },
    {
      path: '/sendTest',
      name: 'sendTest',
      component: sendTest
    },
    {
      path: '/testManage',
      name: 'testManage',
      component: testManage
    }
  ]
}
  ]
})

export default router
