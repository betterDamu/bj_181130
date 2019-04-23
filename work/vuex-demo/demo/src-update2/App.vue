<template>
  <div id="app">
    {{count}} <br>
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
    }
  },
  methods:{
    inc(){
      // 改仓库中的数据  触发一个Mutation
      this.$store.commit('inc',{step:2,name:"damu"})
    },
    dec(){
      this.$store.commit('dec',{step:2,name:"xfz"})
    }
  }
}
</script>

<style>

</style>
