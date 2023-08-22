<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-avatar size="large" :src="Avatar" object-fit="cover" />
  </n-dropdown>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import router from '@/router';
import Avatar from '@/assets/user.png'
import { removeTokenTime } from '@/utils/auth';
import { useUserStore } from '@/store';

const message = useMessage()

const options = [
  {
    label: '个人中心',
    key: "personal"
  },
  {
    label: 'GitHub',
    key: 'github'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
]

function handleSelect(key: string | number) {
  switch (key) {
    case 'personal':
      message.warning('该功能还未实现，请联系开发者')
      break;
    case 'github':
      window.open('https://github.com/yozica/Yo-Vue3-Admin', 'yo-vue3-admin')
      break;
    case 'logout':
      const userStore = useUserStore();
      userStore.setToken("");
      removeTokenTime();
      localStorage.removeItem("token");
      router.push('Login')
      break;
    default:
      message.warning('该选项出现故障，请联系开发者')
      break;
  }
}
</script>

<style lang="scss" scoped></style>