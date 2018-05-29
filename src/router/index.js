import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import node2 from '@/components/node2'
import node3 from '@/components/node3'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/node2',
      name: 'node2',
      component: node2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/node3',
      name: 'node3',
      component: node3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
