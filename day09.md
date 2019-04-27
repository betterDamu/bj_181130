## 数据代理
    将data中属性全部转给vm实例对象(浅代理)
        data中的数据描述符  --->   vm中的访问描述符
        
## 数据劫持
    将data中的属性一个一个拿出来 将它从数据描述符重新定义成访问描述符(深度劫持)
    
## 指令解析
    初始化解析(与数据劫持没有一点关系)
        将node全部转到文档碎片中
        通过init方法进行模板解析
            元素节点
            带{{}}内容的文本节点
                找工具类
                       bind:_getVMVAL(vm,exp)  通过exp去data中找对应的value
                            找更新器更新文档碎片
        将解析成功的模板交回给挂载节点
        
## 构建dep和watcher的多对多关系
    dep:  在每一次为data的属性做劫持前创建对应的dep闭包
                每一个data属性 都对应一个 dep
    watcher:在每一个指令解析的最后一步 创建了一个watcher对象 
                watcher都持有一个回调  回调中也exp对应的更新器闭包
    
    get: function() {
        Dep.target = this;
        var value = this.getVMVal(); //  构建dep与watcher的多对多关系
            dep 里有一个subs的属性  [watcher1,watcher2]
            watcher 里有一个depIds属性 {0:dep0,1:dep1}
        Dep.target = null;
        return value;
    }
    
## 数据的单向流
    data中的数据必须产生改变
    命中数据劫持时的set方法
        damu.damuwife.wifeson.sonname="小小达姆";       
        
## 数据的双向流
    通过input事件去主动触发数据的单向流                   