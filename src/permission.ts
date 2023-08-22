import router from "./router";
import { useUserStore } from "./store";

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  from;
  const userStore = useUserStore();

  if (userStore.getToken.value !== "") {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
