/**
 * 路由页面定义 transfer
 */
export default [
  // 主页
  {path: `/`, redirect: `/view/home`},
  // 登录
  {path: `/login`, component: require('../view/login/Login.vue').default, name: 'login', meta: {title: '登录'}},
]
