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
    
  

