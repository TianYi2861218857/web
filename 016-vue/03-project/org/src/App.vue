<!-- 
	最顶层的总组件 
	vue中组件都是以 .vue 做为后缀名
-->

<!-- 模板(用来显示页面) -->
<template>
	<div class="app">
		<!-- 引入路径时使用相对路径 -->
		<!-- <img src="./assets/images/logo.png" alt="logo"> -->
		<Logo />
		<!-- <h2>Hello Vue</h2> -->
		<Message task="学习" />   <!-- 向Message传递信息,在子组件中接收到 -->
		<p>我是app</p>
	</div>
</template>

<!-- 逻辑() -->
<script>
	//1.引入组件
	import Logo from './pages/Logo.vue'
	import Message from './pages/Message.vue'
	
	// 导出
	export default {
		name: 'App',
		//注册成App的子组件
		components:{
			Logo,
			Message,
		}
		
		
	}
</script>

<!-- 样式 -->
<style>

</style>
