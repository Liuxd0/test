import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FatherTest from '@/父组件与子组件/FatherTest'
import Login from '@/EveryDayDesign/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fatherTest',
      name: 'fatherTest',
      component: FatherTest
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
