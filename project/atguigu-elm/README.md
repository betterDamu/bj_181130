# 怎么做字体图标
    https://icomoon.io/#home  (图标量少   适合生成自定义字体图标)
    
# 样式怎么引入样式
    stylus:  npm install stylus stylus-loader -g

    link(全局的引入   污染组件)
        静态的样式, 样式重置
    import(全局样式)
        对应样式的loader  (只是让webpack的脚手架认识到了当前的样式文件  less sccs stylus)
        对应的样式解析器
    @import
        对应的样式解析器
    
# mock 数据 (发永远都会成功的假请求)
    devServer.before!!!!

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

# 像素 (设计图上所有的数据都要除以2   750*1336)
  1个物理像素 渲染 1个位图像素 图片就可以完美清晰的展示
  1个物理像素 渲染 多个位图像素 图片会锐化(用户观察不到)
  1个物理像素 渲染 不到一个位图像素 图片会失帧(用户体验会差)
  
# viewport meta标签
  10px * 10px 在任何设备上占据的尺寸是不是都是一样的?  
  
# &
  返回上一层!!
  
# 为vue项目设计样式时
  一定结合数据!!!  把样式考虑全!!
  
# 溢出显示省略号
  display block
  overflow hidden
  white-space nowrap
  text-overflow ellipsis    
