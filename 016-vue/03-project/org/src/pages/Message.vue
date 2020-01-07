<template>
	<div class="message">
		<h2>Hello Vue!!! {{task}}</h2>
		<p>我是message</p>
	</div>
</template>

<script>
	// 导出
	export default {
		//导出名称为Message
		name: 'Message',
		//接收信息(接收传值)
		props:{
			task:String
		}
	} 
</script>

<!-- 
	scoped="scoped" 可简写为 scoped 
	只对当前文件有效
-->
<style scoped>
	p{
		color: skyblue;
	}
</style>
