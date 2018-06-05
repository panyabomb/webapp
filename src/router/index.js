import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Node415 from '@/components/Node415'
import Node4503 from '@/components/Node4503'
import Node101C from '@/components/Node101C'
import Node124 from '@/components/Node124'
import Node330A from '@/components/Node330A'
import NodePsad from '@/components/NodePsad'
import NodeRouter from '@/components/NodeRouter'
import Nodeshop from '@/components/Nodeshop'
import Node3850 from '@/components/Node3850'
import node3 from '@/components/node3'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node101C',
      name: 'Node101C',
      component: Node101C,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node124',
      name: 'Node124',
      component: Node124,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node330A',
      name: 'Node330A',
      component: Node330A,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/NodePsad',
      name: 'NodePsad',
      component: NodePsad,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Nodeshop',
      name: 'Nodeshop',
      component: Nodeshop,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node3850',
      name: 'Node3850',
      component: Node3850,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/NodeRouter',
      name: 'NodeRouter',
      component: NodeRouter,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node415',
      name: 'Node415',
      component: Node415,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Node4503',
      name: 'Node4503',
      component: Node4503,
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
