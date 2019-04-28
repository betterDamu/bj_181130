### eslint
    安装:
        npm i eslint -D  (下到是第三方命令行工具)
    生成eslint配置
        eslint --init     (很多问题需要选择)   
            ---> .eslintrc.js
    检查代码:
        eslint ./src (目录)
    与git结合
        pre-commit
        husky
        
###  eslint语法
    当你的项目命中eslint的规则时  我们去找它的规则表(https://cn.eslint.org/docs/rules/)
        查看规则的具体描述
    
    
    跳过规则检查
        魔法注释
            单行  // eslint-disable-line
            多行     
                /* eslint-disable */
                /* eslint-enable */
                
    自动修复语法层面的错误
            eslint ./src  --fix
            
            
### eslint的常用规则
    space-infix-ops : 要求操作符周围有空格
    no-unused-vars  : 禁止出现未使用过的变量
    space-before-function-paren 强制在 function的左括号之前使用一致的空格
    indent :强制使用一致的缩进
    comma-spacing:	强制在逗号前后使用一致的空格
    eol-last: 要求或禁止文件末尾存在空行
    quotes: 强制使用一致的反勾号、双引号或单引号
    
### 自定义eslint的配置!
    'rules': {
        "object-shorthand":2,
        "prefer-arrow-callback":2,
        "no-trailing-spaces":2
      }
      2:错误
      1:警告
      0:关闭
        
    
            
                   
    