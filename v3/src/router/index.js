import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    { path: '/', component: () => import('../views/login') },
    { path: '/test', component: () => import('../views/test') },
    { path: '/testold', component: () => import('../views/testold') },
    { path: '/mainView', component: () => import('../views/mainView'), 
        children: [

        ]
     },
  ]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })
  
  export default router