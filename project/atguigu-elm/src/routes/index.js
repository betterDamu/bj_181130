import seller from "@/pages/elm-seller.vue"
import goods from "@/pages/elm-goods.vue"
import ratings from "@/pages/elm-ratings.vue"

const routes = [
  {path:"/seller",component:seller},
  {path:"/goods",component:goods},
  {path:"/ratings",component:ratings},
  {path:"",redirect:"/seller"}
]


export default routes
