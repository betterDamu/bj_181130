<template>
  <ul>
    <li>
      id:{{message.id}}
    </li>
    <li>
      title:{{message.title}}
    </li>
    <li>
      text:{{message.text}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  var data= [
    {id:1,title:"message01",text:"text01"},
    {id:2,title:"message02",text:"text02"},
    {id:3,title:"message03",text:"text03"},
    {id:4,title:"message04",text:"text04"},
    {id:5,title:"message05",text:"text05"}
  ];
    export default {
        name: "messageDetail",
        props:["id"],
        data(){
          return{
            message:{}
          }
        },
        methods:{
          showDeatil(){
            setTimeout(()=>{
              this.message = data.find((item,index)=>{
                return item.id === this.id*1;
              })
            },2000)
          }
        },
        mounted(){
          this.showDeatil()
        },
        watch:{
          $route(){
            this.showDeatil()
          }
        }
    }
</script>

<style scoped>

</style>
