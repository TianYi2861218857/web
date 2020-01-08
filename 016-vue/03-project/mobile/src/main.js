import Vue from 'vue'
import App from './App.vue'


// 加载公共css样式
import './assets/css/common.css'
Vue.config.productionTip = false
// import store from './store'

//引入路由
// import router from './router/index.js'
new Vue({
  // router,
  // store,
  render: h => h(App),
}).$mount('#app')
