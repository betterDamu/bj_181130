## 注意点
    通过注入路由器，我们可以在任何组件内通过 this.$route 访问当前路由

## 动态路由匹配
```
我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 `User` 组件，对于所有 ID 各不相同的用户，
都要使用这个组件来渲染。
    /user/1
    /user/2
    /user/3    都要匹配到user组件
那么，我们可以在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：
```

``` js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

现在呢，像 `/user/foo` 和 `/user/bar` 都将映射到相同的user路由。


## 路径参数
一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到
`this.$route.params`，可以在每个组件内使用。于是，我们可以更新 `User` 的模板，输出当前用户的 ID：

``` js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中。例如：

| 模式 | 匹配路径 | $route.params |
|---------|------|--------|
| /user/:username | /user/evan | `{ username: 'evan' }` |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` 

## 组件复用
    当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
    因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象

## 路由对象

- **$route.path**


  - 类型: `string`

    字符串，对应当前路由的路径，总是解析为绝对路径，如 `"/foo/bar"`。
- **$route.params**

  - 类型: `Object`

    一个 key/value 对象，包含了匹配片段，如果没有路由参数，就是一个空对象。

- **$route.query**

  - 类型: `Object`

    一个 key/value 对象，表示 URL 查询参数。例如，对于路径 `/foo?user=1`，则有 `$route.query.user == 1`，如果没有查询参数，则是个空对象。

- **$route.hash**

  - 类型: `string`

    当前路由的 hash 值 (带 `#`) ，如果没有 hash 值，则为空字符串。

