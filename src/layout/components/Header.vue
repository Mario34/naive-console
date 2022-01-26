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
            src=""
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
  useMessage,
} from 'naive-ui'
import { ArrowsHorizontal as SettingsAdjustIcon } from '@vicons/carbon'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'

const layoutCtx = useLayout()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true,
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london",
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau',
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles',
  },
]
const message = useMessage()
const handleSelect = () => {
  message.success('hahaha')
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
  box-shadow: 0 1px 6px rgba(30, 30, 30, 0.1);
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
