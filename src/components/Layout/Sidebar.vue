<template>
  <aside
    class="layout-sidebar"
    :class="{ collapsed: layoutCtx.state.sidebarCollapsed }"
  >
    <n-scrollbar style="max-height: 100%;">
      <n-menu
        inverted
        accordion
        :options="menuOptions"
        :indent="24"
        :collapsed="layoutCtx.state.sidebarCollapsed"
        :collapsed-width="64"
        @update:value="handleUpdateValue"
      />
    </n-scrollbar>
  </aside>
</template>

<script lang="tsx">
import { defineComponent, h } from 'vue'
import { NMenu, NIcon, NScrollbar } from 'naive-ui'
import { AlignBoxMiddleCenter, Asleep } from '@vicons/carbon'
import { useLayout } from './config'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default defineComponent({
  name: 'LayoutSidebar',
  components: {
    NMenu,
    NScrollbar,
  },
  setup() {
    const layoutCtx = useLayout()
    return {
      handleUpdateValue(e) {
        console.log(e)
      },
      layoutCtx,
      menuOptions: [
        {
          label: '1973年的弹珠玩具',
          key: 'pinball-1973',
          icon: renderIcon(AlignBoxMiddleCenter),
          children: [
            {
              label: '鼠',
              key: 'rat',
            },
          ],
        },
        {
          label: '寻羊冒险记',
          key: 'a-wild-sheep-chase',
          icon: renderIcon(Asleep),
        },
        {
          label: '舞，舞，舞',
          key: 'dance-dance-dance',
          icon: renderIcon(Asleep),
          children: [
            {
              type: 'group',
              label: '人物',
              key: 'people',
              children: [
                {
                  label: '叙事者',
                  key: 'narrator',
                  icon: renderIcon(Asleep),
                },
                {
                  label: '羊男',
                  key: 'sheep-man',
                  icon: renderIcon(Asleep),
                },
              ],
            },
            {
              label: '饮品',
              key: 'beverage',
              icon: renderIcon(Asleep),
              children: [
                {
                  label: '威士忌',
                  key: 'whisky',
                },
              ],
            },
            {
              label: '食物',
              key: 'food',
              children: [
                {
                  label: '三明治',
                  key: 'sandwich',
                },
              ],
            },
            {
              label: '过去增多，未来减少',
              key: 'the-past-increases-the-future-recedes',
            },
          ],
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.layout-sidebar{
  height: 100vh;
  width: var(--app-side-width);
  position: fixed;
  top: 0;
  left: 0;
  transition: width var(--app-animation-duration);
  background-color: rgb(0, 20, 40);

  &.collapsed {
    width: var(--app-side-collapsed-width);
  }
}
</style>
