// --此文件为入口文件

//生成vue实例的前提是要把vue引入
import Vue from 'vue'
//引进vue组件
import App from './App.vue'

//开发环境
Vue.config.productionTip = false

//生成vue实例
new Vue({
	//render 渲染(渲染引入的App)
  render: h => h(App),
  //$mount   挂载到 #app DOM节点上
}).$mount('#app')
  