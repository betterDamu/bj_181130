# 什么是ajax
  `Asynchronous JavaScript XML，其本身不是一种新技术，而是一个在 2005年被提出的新术语，
   用来描述一种使用现有技术集合的‘新’方法，包括: HTML or XHTML, Cascading Style Sheets,
   JavaScript, The Document Object Model,XML 以及最重要的 XMLHttpRequest 对象。
   当使用结合了这些技术的AJAX模型以后， 网页程序能够快速地将渐步更新呈现在用户界面上，
   不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。尽管X在Ajax中代表XML, 
   但由于JSON的许多优势，比如更加轻量以及作为Javascript的一部分。目前JSON的使用比XML更加普遍。
   JSON和XML都被用于在Ajax模型中打包信息`

## 原生ajax请求
### 核心对象XMLHttpRequest
    XMLHttpRequest本身是一个构造函数，用来初始化一个 XMLHttpRequest 对象。
    使用XMLHttpRequest (XHR)对象可以与服务器交互。您可以从响应中获取数据，
    而无需让整个的页面刷新。这使得Web页面可以只更新页面的局部，
    而不影响用户的操作。XMLHttpRequest在 Ajax 编程中被大量使用
### 基本流程
 1.  创建一个请求对象
 1.  为异步请求注册注册回调
 1.  初始化请求
 1.  发送请求
### readyState
   - 0  (未初始化) or (请求还未初始化)
   - 1  (正在加载) or (已建立服务器链接)
   - 2  (加载成功) or (请求已接受)
   - 3  (交互) or (正在处理请求)
   - 4  (完成) or (请求已完成并且响应已准备好) 
### status
  > status码是标准的HTTP status codes
  
   - 1XX		信息类状态码		接收的请求正在处理
   - 2XX		成功类状态码		请求正常处理完毕
   - 3XX		重定向状态码		需要进行附加操作以完成请求
   - 4XX		客户端错误状态码	服务器无法处理请求
   - 5XX		服务器错误状态码	服务器处理请求出错
 
### 代码示例
    //创建一个请求对象
    var xhr = new XMLHttpRequest();
    //为异步请求注册注册回调
    xhr.onreadystatechange=()=>{
        if(xhr.readyState === 4){
            if(xhr.status===200 || xhr.status===304 ){
                console.log(xhr.responseText)
            }else {
                console.log("请求失败")
            }
        }
    }
    //初始化请求
    xhr.open("get","http://localhost:8000");
    //发送请求
    xhr.send(); 

## 跨域
  > 在发送Ajax请求时，浏览器就会对跨域的请求做出限制
### 同源策略
   如果url中端口（如果有指定）和域名都相同，则他们具有相同的源
   如果url中端口（如果有指定）和域名有差别，则他们属于不同的源 		
### 解决方案
  - Jsonp
  - CORS
    


    
   
    
  
