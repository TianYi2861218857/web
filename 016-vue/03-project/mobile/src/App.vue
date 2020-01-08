<!-- 模板 -->
<template>
    <div id="App">
       <h2>测试</h2> 
    </div>
</template>
<!-- 逻辑 -->
<script>
    export default{
        name:'App',
        
    }
</script>

<!-- 样式 -->
<!-- 使用less预编译必须先安装对应包,然后style标签中加入lang="less" -->
<style lang="less">
    #App{
        h2{
            color: rgb(11, 240, 182);
            .rem(padding,10px);
        }
    }
</style>
