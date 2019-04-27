# 路由组件传参

在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将组件和路由解耦：

**取代与 `$route` 的耦合**

``` js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

**通过 `props` 解耦**

``` js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },
  ]
})
```
## 布尔模式

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。类似于父组件通过props进行数据传递

## 对象模式

如果 `props` 是一个对象，它会被按原样设置为组件属性。

``` js
const router = new VueRouter({
  routes: [
    { path: '/promotion/from-newsletter', component: Promotion, props: { id: 123 } }
  ]
})
```

## 函数模式

你可以创建一个函数返回 `props`。函数的参数是当前route对象

``` js
const router = new VueRouter({
  routes: [
    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  ]
})
```
