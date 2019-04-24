<template>
  <div class="row">
    <h3  v-if="firstShow">请输入查询数据</h3>
    <p   v-else-if="loading"> <strong>loading</strong> </p>
    <p   v-else-if="errorFlag"> <strong style="color: red">{{errorMsg}}</strong> </p>
    <div v-else class="card" v-for="item in items" :key="item.node_id">
      <a :href="item.url" target="_blank">
        <img :src="item.avator" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import PubSub from "pubsub-js";
    import axios from "axios";
    export default {
        name: "list",
        data(){
          return {
            firstShow:true,
            loading:false,
            errorFlag:false,
            errorMsg:"错啦",
            items:[]
          }
        },
        mounted(){
          PubSub.subscribe("searchUsers",async (msg,data)=>{
              // 将提示信息去掉
             this.firstShow = false;
             this.loading=true;

              const url = `https://api.github.com/search/users?q=${data}`;
              try {
                const response = await axios.get(url);
                //对后台数据的整理!!
                this.items = response.data.items.map(item=>({
                  url:item["html_url"],
                  avator:item.avatar_url,
                  name:item.login
                }));
                /*this.items = response.data.items.map((item,index,arr)=>{
                  return {
                    url:item["html_url"],
                    avator:item.avatar_url,
                    name:item.login
                  }
                });*/
              }catch (e) {
                this.errorFlag = true;
                this.errorMsg = e;
              }

              this.loading=false;
          })
        }
    }
</script>

<style  scoped>
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
