<template>
    <div id="app">
      <p>{{msg}}</p>
      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "App",
        data(){
          return {
            msg:"app.vue"
          }
        }
    }
</script>

<style  scoped>
  p{
    color :red
  }
</style>
