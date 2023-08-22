<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
(window as any).$message = useMessage()
</script>

<style lang="scss" scoped></style>
