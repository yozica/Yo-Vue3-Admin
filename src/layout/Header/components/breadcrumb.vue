<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in breadcrumbList" @click="router.push(item.path)">
      {{ item.meta.label ? item.meta.label : item.name }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const breadcrumbList = ref<any>([])

const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
}

watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>