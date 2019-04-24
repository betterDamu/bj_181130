<template>
  <div id="app">
    {{count}} 当前数是 <span style="font-size: 60px;color: red">{{countType}}</span><br>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count;
    },
    countType(){
      return this.$store.getters.countType;
    }
  },
  methods:{
    inc(){
      // 改仓库中的数据  触发一个Mutation
      this.$store.commit('inc',{step:1,name:"damu"})
    },
    dec(){
      this.$store.commit('dec',{step:1,name:"xfz"})
    }
  }
}
</script>

<style>

</style>
