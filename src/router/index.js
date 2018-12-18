import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

/* eslint-disable global-require */
const demo = r => require.ensure([], () => r(require('../pages/demo/index.vue')), 'home')

export default new Router({
  // 开启history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        // 地址为空时跳转hello页面
        {
          path: '',
          redirect: '/demo',
        },
        {
          name: 'demo',
          path: '/demo',
          component: demo,
        },
      ],
    },
  ],
})
