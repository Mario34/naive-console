<template>
  <div class="layout-header">
    <div
      class="layout-header-container"
      :class="{ collapsed: layoutCtx.state.sidebarCollapsed }"
    >
      <div class="layout-header__left">
        <n-button
          strong
          secondary
          circle
          class="setting-trigger"
        >
          <n-icon
            size="20"
            @click="layoutCtx.switchSidebar(!layoutCtx.state.sidebarCollapsed)"
          >
            <SettingsAdjustIcon />
          </n-icon>
        </n-button>
        <Breadcrumb />
      </div>
      <div class="layout-header__right">
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-avatar
            round
            size="medium"
            src="./avatar.png"
          />
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '../config'
import {
  NIcon, NAvatar, NDropdown, NButton,
  useMessage, useDialog,
} from 'naive-ui'
import { ArrowsHorizontal as SettingsAdjustIcon } from '@vicons/carbon'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'
import { useRouter } from 'vue-router'
import { storageToken } from '@/storage'

const router = useRouter()
const layoutCtx = useLayout()
const options = [
  {
    label: '个人中心',
    key: 'profile',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]
const message = useMessage()
const dialog = useDialog()
const handleSelect = (e: string) => {
  switch (e) {
    case 'profile':
      router.push({ name: 'user-profile' })
      break
    case 'logout':
      dialog.warning({
        title: '退出登录提示',
        content: '确定退出当前账号？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          storageToken.remove()
          router.replace({ name: 'login' })
        },
      })
      break
    default:
      //
  }
}
</script>

<style lang="scss" scoped>
.layout-header-container {
  height: var(--app-header-height);
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - var(--app-side-width));
  transition: width var(--app-animation-duration);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: var(--app-bg-header);
  border-bottom: 1px solid var(--app-border-color);
  z-index: var(--app-zindex-top);

  &.collapsed {
    width: calc(100% - var(--app-side-collapsed-width));
  }
}

.layout-header {
  height: var(--app-header-height);

  .setting-trigger {
    margin-right: 10px;
  }

  &__left {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  &__right {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
