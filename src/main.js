// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(MintUI)

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (store.state.token === 'hasToken') {
      console.log(store.state.token)
      next();
    }
    else {
      console.log(store.state.token)
      router.push('/')
    }
  }
  else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
