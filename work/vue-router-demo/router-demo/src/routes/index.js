import user from "@/components/user"
import home from "@/components/home"
import about from "@/components/about"

const routes =[
  {path:"/user",component:user},
  {path:"/home",component:home},
  {path:"/about",component:about},
  {path:"",redirect:"/user"}
]

export default routes
