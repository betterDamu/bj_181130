# 嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

借助 `vue-router`，使用嵌套路由配置，就可以很简单地表达这种关系。


App.vue里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。
同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。
例如，在 `User` 组件的模板添加一个 `<router-view>`：

``` js
const User = {
  template: `
    <div class="user">
      <router-view></router-view>
    </div>
  `
}
```

要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：

``` js
const router = new VueRouter({
  routes: [
    { path: '/user', component: User,
      children: [
        {
            // 当 /user/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
            //  当 /user/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

**要注意，以 `/` 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。**

如果没有匹配到合适的子路由。而你又想要渲染点什么，可以提供一个 空的 子路由：

``` js
const router = new VueRouter({
  routes: [
    {
      path: '/user', component: User,
      children: [
        // "/user/xxx(不存在的名字)"
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },
      ]
    }
  ]
})
```

