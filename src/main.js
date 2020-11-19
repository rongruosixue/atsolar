// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import global from './common/global'
import VueLocalForage from 'vue-localforage'

Vue.prototype.global = global;
Vue.use(VueLocalForage)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  },
  silentFallbackWarn:true,
})
locale.use(i18n.locale)

Vue.use(VueAxios, axios)
Vue.use(ElementUI, { size: 'small', zIndex: 3000, locale:locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,i18n,
  components: { App, i18n, ElementUI },
  template: '<App/>',
  data(){
    return{
      user:null,
    }
  },
  mounted () {
      axios.defaults.baseURL = 'http://localhost:8082/';
      var lang = window.navigator.language||window.navigator.userLanguage;//常规浏览器语言和IE浏览器
      lang = lang.substr(0, 2);
      if(lang === 'en'){
        i18n.locale = 'en';
      } else {
        i18n.locale = 'zh';
      }
  }
})
