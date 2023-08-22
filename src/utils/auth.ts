import { TOKEN_TIME, TOKEN_TIME_VALUE } from "./constant";

// 登录时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now().toString());
};

// 获取
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME);
};

// 失效后删除时间
export const removeTokenTime = () => {
  localStorage.removeItem(TOKEN_TIME);
};

// 是否已经过期
export const diffTokenTime = () => {
  const currentTime = Date.now();
  const tokenTime = parseInt(getTokenTime() as string);
  return currentTime - tokenTime > TOKEN_TIME_VALUE;
};
