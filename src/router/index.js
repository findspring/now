import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const index = r => require.ensure([], () => r(require('components/index/index')), 'index');
const rem = r => require.ensure([], () => r(require('components/rem/rem')), 'rem');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/rem'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/rem',
      name: 'rem',
      component: rem
    },
  ]
})
