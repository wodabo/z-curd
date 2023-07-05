import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
const routerList = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home"),
  },
];

// 基础路由注册
const router = new Router({
  mode: "hash",
  routes: routerList,
});

export default router;
