<template>
  <div class="header-container">
    <div class="left">
      <n-icon size="30" @click="switchCollapsed" :style="`transform: rotate(${collapsed ? 180 : 0}deg);`">
        <CaretBack />
      </n-icon>
      <Breadcrumb />
    </div>
    <div class="right" style="width: 40px;height: 40px;">
      <Avatar />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CaretBack } from '@vicons/ionicons5'
import Breadcrumb from './components/breadcrumb.vue'
import Avatar from './components/avatar.vue'

const { switchCollapsed, collapsed } = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  },
  switchCollapsed: {
    type: Function,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .left {
    display: flex;
    align-items: flex-end;
    gap: 20px;

    .n-icon {
      transition: all 0.2s;

      &:hover {
        color: #18A058;
      }
    }
  }
}
</style>