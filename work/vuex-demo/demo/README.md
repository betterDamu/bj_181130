# 核心
  1. 怎么读取仓库的数据
  2. 怎么修改仓库的数据

## store & state & mutation
### 想要修改仓库中数据 你必须定义一个mutation来修改仓库中数据
### 如果希望仓库数据改变页面也随之更新 你要在组件内拿一个计算属性与之对应
    仓库的state  --->  组件上computed
    仓库的getters -->  组件上computed
    仓库的mutation --> 组件上methods

## getters & 辅助函数    
### 如果共用的计算属性应该定义在仓库的getters字段下
###  辅助函数可以简化我们组件的编码
    
# 写项目
 1. 抽静态组件
 2. 搭建vuex环境
        建仓库
        注册仓库
 3. 设计页面数据源
 4. 设计仓库数据源
 5. 从仓库读取数据
 6. 修改仓库数据
      - 这个修改是不是异步的
         如果是异步的要定义actions
      - 定义修改数据的mutation
      - 定义names(确保命名统一)
      - 分析页面上该如何提交该次mutation     
      - 完成功能 进行测试
     
# 移动端全栈 (web(pc) + H5 + 安卓 + ios + 小程序)  
    JS + java + objectC     
# web全栈
    js + node
    js + php     
    js + java(主流)
    
# 产品
  H5 + UI + UE + 设计
# 技术性销售    
   
  

