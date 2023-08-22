import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(localStorage.getItem("token") || "");

  const getToken = computed(() => token);

  const setToken = (newToken: string) => {
    token.value = newToken;
  };

  return { token, getToken, setToken };
});
