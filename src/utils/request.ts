import axios from "axios";
import { diffTokenTime, removeTokenTime } from "./auth";
import { useUserStore } from "@/store";
import router from "@/router";

// 创建axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求开始之前
    // to do
    const token = localStorage.getItem("token");
    if (token) {
      if (diffTokenTime()) {
        const userStore = useUserStore();
        userStore.setToken("");
        removeTokenTime();
        localStorage.removeItem("token");
        setTimeout(() => {
          router.push("Login");
        }, 2000);
        return Promise.reject(new Error("登录权限已过期，请重新登录"));
      }
    }
    if (!config.headers.token) {
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    console.log(error); // debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果你想获取http信息，如标题或状态
   * return  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 这是一个简单的例子
   * 你还可以通过HTTP状态码判断请求状态
   */
  (response) => {
    const message = (window as any).$message;
    const res = response.data;

    if (res.code != 0) {
      message.error(res.message);

      return Promise.reject(new Error(res.message || "Error"));
    }
    return res;
  },
  (error) => {
    const message = (window as any).$message;
    console.error("err" + error); // debug

    if (error.message == "Network Error") {
      message.error("请求超时, 请检查网络或联系开发者");
      return Promise.reject(error);
    }
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
