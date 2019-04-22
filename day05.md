## v-model脏数据
    因为v-model是数据双向绑定的  很有可能增加修改父组件的数据
    使用计算属性看来解决脏数据的问题

## 数据存储功能
    组件化开发的时候  一个组件内部会很很多功能
                            ---->  注意js模块化开发

## 插槽
    -是什么
        <slot></slot>   vue定义好的全局组件
    -怎么用
        一般插槽放在子组件中  因为插槽是一个组件(被模板覆盖掉)
                模板从哪来?
                app
                    <app>
                        <p></p>
                        <child>
                         <template slot-scope="obj">
                              <span>{{obj.msg}}</span>
                         </template>
                        </child>
                    </app>
                 
                 child   
                    <div></div> 
                    <slot msg="123">xxx</slot>
                    <div></div> 
    -为什么   
          父组件有能力向子组件传递html片段(普通插槽)   
                    
          父组件有能力向子组件传递html片段
          子组件有能力向父组件传递数据     (作用域插槽)               