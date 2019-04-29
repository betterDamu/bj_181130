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

# 像素
  1个物理像素 渲染 1个位图像素 图片就可以完美清晰的展示
  1个物理像素 渲染 多个位图像素 图片会锐化(用户观察不到)
  1个物理像素 渲染 不到一个位图像素 图片会失帧(用户体验会差)
  
# viewport meta标签
  10px * 10px 在任何设备上占据的尺寸是不是都是一样的?  
