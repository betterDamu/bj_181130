import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App"
import A from "./components/A"
import B from "./components/B"


Vue.config.productionTip=false
Vue.use(VueRouter)

// 路由
const routes = [
  {path:"/A",component:A},
  {path:"/B",component:B}
]

//路由器
const router =  new VueRouter({
  routes
})


new Vue({
  el:"#app",
  components:{
    App
  },
  template:"<App></App>",
  router
})
