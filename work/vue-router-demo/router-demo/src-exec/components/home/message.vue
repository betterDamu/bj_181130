<template>
   <div>
     <ul>
       <li v-for="(item,index) in messages">
         <router-link :to="`/home/message/messageDetail?id=${item.id}`">{{item.title}}</router-link>
       </li>
     </ul>
     <router-view></router-view>
   </div>
</template>

<script type="text/ecmascript-6">
    var data= [
      {id:1,title:"message01"},
      {id:2,title:"message02"},
      {id:3,title:"message03"},
      {id:4,title:"message04"},
      {id:5,title:"message05"}
    ];
    export default {
      name: "message",
      data(){
        return{
          messages:[]
        }
      },
      mounted(){
        setTimeout(()=>{
          this.messages = data;
        },2000)
      }
    }
</script>

<style  scoped>

</style>
