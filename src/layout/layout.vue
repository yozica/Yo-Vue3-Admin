<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider collapse-mode="width" :collapsed-width="collapsedWidth" :width="240" :collapsed="collapsed" bordered
      style="user-select: none;">
      <div class="logo">{{ collapsed ? '管理' : '管理面板' }}</div>
      <Menu :collapsed="collapsed" />
      <div v-if="collapsedWidth === 0" style="text-align: right; padding-right: 8px;">
        <n-button type="primary" @click="switchCollapsed">收起</n-button>
      </div>
    </n-layout-sider>
    <n-layout :position="collapsedWidth === 0 ? 'absolute' : 'static'">
      <n-layout-header bordered :style="`height: ${headerHeight};user-select: none;`">
        <Header :switch-collapsed="switchCollapsed" :collapsed="collapsed" />
      </n-layout-header>
      <n-layout-content position="absolute" :style="`top: ${headerHeight};`">
        <Main />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from './Menu/menu.vue'
import Header from './Header/header.vue'
import Main from './Main/main.vue'

const headerHeight: string = '64px'

const collapsed = ref<boolean>(false)
const collapsedWidth = ref<number>(80)

function switchCollapsed(): void {
  collapsed.value = !collapsed.value
}

function sideWidth() {
  if (window.innerWidth < 1200) {
    if (window.innerWidth < 500) {
      collapsedWidth.value = 0
    } else {
      collapsedWidth.value = 80
    }
    collapsed.value = true
  } else {
    collapsed.value = false
  }
}
sideWidth()
const resizeObserver = new ResizeObserver(() => {
  sideWidth()
});
resizeObserver.observe(document.querySelector('#app') as HTMLElement);
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: v-bind(headerHeight);
  overflow: hidden;

  text-align: center;
  line-height: v-bind(headerHeight);
  font-size: 25px;
  font-weight: 800;
}
</style>