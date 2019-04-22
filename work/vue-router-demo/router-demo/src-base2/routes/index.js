import user from "@/components/user"
import home from "@/components/home"
import about from "@/components/about"
import aboutItem from "@/components/aboutItem"


const routes =[
  {path:"/user",component:user},
  {path:"/home",component:home},
  {path:"/about",component:about},
  {path:"/about/item",component:aboutItem},
  {path:"",redirect:"/user"}
]

export default routes
