var colors = require('./colors');
console.log(colors)
// 1. node内建包
/*
    2. 自己文件的路径
        不会主动加 ./ ../ /
*/
/*
    3. 第三方包
         module.paths[0]
            ---> 找包名
             ---> 找包底下的package.json
               ---> package.json  main字段所指向的文件
                 ---> 如果main字段不存在 直接找包名底下的index.js  index.json
 */


/*    [ 'C:\\Users\\alienware\\Desktop\\北京_前端_181130\\bj_181130\\work\\node_package\\node_modules',
    'C:\\Users\\alienware\\Desktop\\北京_前端_181130\\bj_181130\\work\\node_modules',
    'C:\\Users\\alienware\\Desktop\\北京_前端_181130\\bj_181130\\node_modules',
    'C:\\Users\\alienware\\Desktop\\北京_前端_181130\\node_modules',
    'C:\\Users\\alienware\\Desktop\\node_modules',
    'C:\\Users\\alienware\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules' ]*/

