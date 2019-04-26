<template>
  <div class="row">
    <h3 v-if="firstShow">请输入查询数据</h3>
    <p v-else-if="loading">loading</p>
    <p v-else-if="errorMsg">{{errorMsg}}</p>
    <p v-else-if="noneMsg">{{noneMsg}}</p>
    <div class="card" v-else v-for="user in users" :key="user.id">
      <a :href="user.href" target="_blank">
        <img :src="user.src" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from "vuex"
    export default {
        name: "list",
        computed:mapState(["firstShow","loading","errorMsg","noneMsg","users"])
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
