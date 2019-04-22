import user from "@/components/user"
import home from "@/components/home"
import about from "@/components/about"
import news from "@/components/home/news"
import message from "@/components/home/message.vue"



const routes =[
  {
    path:"/user",
    component:user,
    props(route){
      return {
        id:route.query.id
      }
    },
    children:[
      {path:"/user/:id",component:user,props:true}
    ]
  },
  {
    path:"/home",
    component:home,
    children:[
      {path:"news",component:news},
      {path:"message",component:message},
      {path:"",redirect:"news"}
    ]
  },
  {path:"/about",component:about},
  {path:"",redirect:"/user"}
]

export default routes


// {
//   path:"/user/:id",
//     component:user,
//   props:true
// },
