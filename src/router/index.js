import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import login from '../pages/login'

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
    }
  ],
  mode:'history'
})
