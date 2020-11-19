import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import login from '../pages/login'
import meCenter from '../pages/meCenter'
import endUser from '../pages/endUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      component: HelloWorld
    },
    {
      name:login,
      path: '/',
      component: login
    },
    {
      name:meCenter,
      path: '/meCenter',
      component: meCenter
    },
    {
      name:endUser,
      path: '/endUser',
      component: endUser
    }
  ],
  mode:'history'
})
