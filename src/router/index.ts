import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layout/layout.vue";

const menuRoutes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/home.vue"),
    meta: { label: "首页" },
  },
  {
    path: "/test",
    name: "Test",
    redirect: "/test1",
    meta: { label: "测试" },
    children: [
      {
        path: "/test1",
        name: "Test1",
        component: () => import("@/views/test/test1.vue"),
        meta: { label: "测试1" },
      },
      {
        path: "/test2",
        name: "Test2",
        component: () => import("@/views/test/test2.vue"),
        meta: { label: "测试2" },
      },
      {
        path: "/test3",
        name: "Test3",
        component: () => import("@/views/test/test3.vue"),
        meta: { label: "测试3" },
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home",
    component: Layout,
    children: menuRoutes,
    meta: { label: "管理面板" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
    meta: { label: "登录页面" },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errorPage/404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
