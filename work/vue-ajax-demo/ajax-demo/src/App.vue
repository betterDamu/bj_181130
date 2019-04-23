<template>
  <div id="app">
    <div class="container">
      <v-search></v-search>
      <v-list></v-list>
    </div>
  </div>
</template>

<script>
  import search from "./components/search"
  import list from "./components/list"
  export default {
    name: 'App',
    components:{
      "v-search":search,
      "v-list":list
    }
  }
</script>

<style>

</style>
