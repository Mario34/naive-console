<template>
  <template v-if="menu.children && menu.children.length > 1">
    <el-submenu :index="currentPath">
      <template #title>
        <i :class="menu.meta?.icon"></i>
        <span>{{ menu.meta?.title }}</span>
      </template>
      <MenuItem
        v-for="item in menu.children"
        :key="item.name"
        :menu="item"
        :base="currentPath"
      />
    </el-submenu>
  </template>
  <template v-if="menu.children && menu.children.length === 1">
    <MenuLink
      v-if="menu.children[0]?.meta?.link"
      :menu="menu.children[0]"
    />
    <el-menu-item
      v-else
      :index="currentPath"
      @click="onClickItem"
    >
      <i :class="menu.children[0].meta?.icon"></i>
      <span>{{ menu.children[0].meta?.title }}</span>
    </el-menu-item>
  </template>
  <template v-if="!menu.children || !menu.children.length">
    <MenuLink
      v-if="menu.meta?.link"
      :menu="menu"
    />
    <el-menu-item
      v-else
      :index="currentPath"
      @click="onClickItem"
    >
      <i :class="menu.meta?.icon"></i>
      <span>{{ menu.meta?.title }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { isAbsolutePath, isUrl } from '/@/utils'
import MenuLink from './MenuLink.vue'

import type { ConfigRoute } from '/@/router/router-type'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  components: {
    MenuLink,
  },
  props: {
    menu: {
      type: Object as PropType<ConfigRoute>,
      required: true,
    },
    base: {
      type: String,
      default: '/',
    },
  },
  setup(props) {
    const router = useRouter()
    const currentPath = computed(() => {
      if (isAbsolutePath(props.menu.path)) {
        return props.menu.path
      }
      if (props.menu.path === '') {
        return props.base
      }
      if (props.base.endsWith('/')) {
        return `${props.base}${props.menu.path}`
      }
      return `${props.base}/${props.menu.path}`
    })
    const onClickItem = (): void => {
      if (isUrl(currentPath.value)) {
      } else {
        router.push(currentPath.value)
      }
    }
    return {
      currentPath,
      onClickItem,
      isUrl,
    }
  },
})
</script>
