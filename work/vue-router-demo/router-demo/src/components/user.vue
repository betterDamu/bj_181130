<template>
    <p>
     这是用户模块 当前登陆的用户id为：{{id}}
     <router-view></router-view>
    </p>
</template>



<script type="text/ecmascript-6">
    export default {
        name: "user",
        props:["id"]
    }
</script>

<style  scoped>

</style>
