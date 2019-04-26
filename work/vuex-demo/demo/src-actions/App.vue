<template>
  <div id="app">
    <v-count></v-count>
  </div>
</template>

<script>
import count from "./components/count"
export default {
  name: 'App',
  components:{
    "v-count":count
  }
}
</script>

<style>

</style>
