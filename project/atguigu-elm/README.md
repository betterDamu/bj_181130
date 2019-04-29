# 怎么做字体图标
    https://icomoon.io/#home
# 怎么引入样式
    link
    import
    @import
# mock 数据
    const appData = require("../data.json")
    const seller = appData.seller
    const goods = appData.goods
    const ratings = appData.ratings
    
    devServer:
      before(app){
            app.get("/api/seller",(req,res)=>{
              res.json({
                errno:0,
                data:seller
              })
            })
      }    
