<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--<a href="#/user" class="list-group-item ">User</a>
          <a href="#/about" class="list-group-item">About</a>
          <a href="#/home" class="list-group-item ">Home</a>-->
          <router-link to="/home" class="list-group-item ">Go to Home</router-link>
          <router-link to="/user" class="list-group-item ">Go to User</router-link>
          <router-link to="/about" class="list-group-item ">Go to About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div data-v-957c9522="" class="col-xs-6">
          <div data-v-957c9522="" class="panel">
            <div data-v-957c9522="" class="panel-body">
             <keep-alive>
               <router-view></router-view>
             </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
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
