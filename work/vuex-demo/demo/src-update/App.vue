<template>
  <div id="app">
    <span @click="handleC">{{count}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  // data(){
  //   return {
  //     count:this.$store.state.count
  //   }
  // },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    handleC(){
      // 改仓库中的数据  触发一个Mutation
      this.$store.commit('inc')
    }
  }
}
</script>

<style>

</style>
