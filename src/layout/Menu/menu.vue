<template>
  <n-menu :options="menuOptions" :collapsed="collapsed" :collapsed-width="80" :collapsed-icon-size="22" :accordion="true"
    :value="currentItem" :default-expanded-keys="defaultExpandedKeys" />
</template>

<script lang="ts" setup>
import { h, Component, reactive, ref, watch } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink, useRoute } from 'vue-router'
import { getMenuList } from '@/api/user'
import { menuListProps } from '@/type'
import { iconMap } from '@/utils/icon-map'

const route = useRoute()

const { collapsed } = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

const currentItem = ref('')
watch(
  route,
  () => {
    currentItem.value = route.name as string;
  },
  { deep: true, immediate: true }
)
const menuOptions = reactive<any>([])
const defaultExpandedKeys = reactive<any>([])

async function getMenuListFn(): Promise<void> {
  const { data: menuList } = await getMenuList() as any
  const options = menuListToMenuOptions(menuList)
  const keys = findExpandedKeys(menuList, route.name as string)
  options.forEach(item => {
    menuOptions.push(item)
  })
  keys.forEach(item => {
    defaultExpandedKeys.push(item)
  })
}
getMenuListFn()

function menuListToMenuOptions(menuList: menuListProps[]) {
  const menuOptions = []
  for (let i in menuList) {
    if (menuList[i].hidden === true) {
      continue
    }
    const item: any = {}
    item.key = menuList[i].key
    if (menuList[i].iconName !== null) {
      item.icon = renderIcon(iconMap[(menuList[i].iconName as string)])
    }
    if (menuList[i].disabled === true) {
      item.disabled = menuList[i].disabled
    }
    switch (menuList[i].type) {
      case "select":
        item.label = menuList[i].label
        item.children = menuListToMenuOptions((menuList[i].children as menuListProps[]))
        break
      case "divider":
        item.type = menuList[i].type
        item.props = menuList[i].attributes
        break
      case "group":
        item.type = menuList[i].type
        item.label = menuList[i].label
        item.children = menuListToMenuOptions((menuList[i].children as menuListProps[]))
        break
      case "text":
        item.label = menuList[i].label
        break
      default:
        item.label = () => {
          const type: any = menuList[i].type === 'RouterLink' ? RouterLink : menuList[i].type
          const label = menuList[i].type === 'RouterLink' ? { default: () => menuList[i].label } : menuList[i].label
          return h(
            type,
            menuList[i].attributes,
            label
          )
        }
    }
    menuOptions.push(item)
  }
  return menuOptions
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function findExpandedKeys(menuList: menuListProps[], name: string): string[] {
  let keys: string[] = []
  for (let i in menuList) {
    if (menuList[i].key === name) {
      keys.push(menuList[i].key)
    } else {
      if (menuList[i].children !== undefined) {
        const newKeys = findExpandedKeys(menuList[i].children as menuListProps[], name)
        if (newKeys.includes(name)) return [menuList[i].key, ...newKeys]
      }
    }
  }
  return keys
}
</script>