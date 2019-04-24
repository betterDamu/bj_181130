<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="searchC">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
    import PubSub from "pubsub-js"
    export default {
        name: "search",
        data(){
          return {
            searchName:""
          }
        },
        methods:{
          searchC(){
            PubSub.publish("searchUsers",this.searchName);
            this.searchName="";
          }
        }
    }
</script>

<style  scoped>

</style>
