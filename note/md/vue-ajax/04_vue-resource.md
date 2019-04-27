# vue-resource
## github仓库地址
  > https://github.com/pagekit/vue-resource
## 测试接口
  > https://api.github.com/search/repositories?q=js&sort=stars&order=desc  
## 安装  
  > npm install vue-resource --save
## 使用
   > this.$http.get('/someUrl').then(successCallback, errorCallback);
   
        // in a Vue instance
        this.$http.get('/someUrl').then(response => {
          // success callback
        }, response => {
          // error callback
        });
        
   > this.$http.post('/someUrl', [body]).then(successCallback, errorCallback);
    
     this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
       // get body data
       this.someData = response.body;
     }, response => {
       // error callback
     }); 
