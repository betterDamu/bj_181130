<template>
  <div id="app">
      <p v-if="show">loading</p>
      <p v-else>github上最流行的库是<a :href="item.href">{{item.name}}</a></p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return{
      show:true,
      item:{
        href:"#",
        name:""
      }
    }
  },
  //几乎所有的异步操作都在mounted里做
  async mounted(){
    try {
      // var res = await this.$http.get("https://api.github.com/search/repositories?q=js&sort=stars&order=desc");
      var res = await axios.get("https://api.github.com/search/repositories?q=js&sort=stars&order=desc");
      this.show = false;
      this.item.name = res.data.items[0].name;
      this.item.href = res.data.items[0].html_url;
      /*this.show = false;
      this.item.name = res.body.items[0].name;
      this.item.href = res.body.items[0].html_url;*/
    }catch (e) {
      this.show = false;
    }
  }
}
</script>

<style>

</style>
