<template>
  <div class="tabs">
    <router-link
      v-for="(item) in tabs"
      :key="item.path"
      v-slot="{ navigate }"
      :to="item.path"
      custom
    >
      <div
        class="tabs-item"
        size="medium"
        :checked="route.path === item.path"
        :class="{
          'is-active': route.path === item.path,
          'disabled': Object.keys(tabs).length <= 1 && tabs['/'],
        }"
        closable
        role="link"
        @click="navigate"
      >{{ item.name }}
        <i
          v-if="Object.keys(tabs).length>1 || (Object.keys(tabs).length ===1 &&!tabs['/'])"
          class="el-icon-close close-icon"
          @click.stop="onCloseItem(route)"
        />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabs } from '../use-config'

import type { RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
  name: 'Tabs',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { tabs, createOrUpdate, closeItem } = useTabs()

    watch(
      route.query,
      () => {
        if (!(route.meta?.tabs === false)) {
          createOrUpdate(route)
        }
      },
      {
        immediate: true,
      },
    )

    const onCloseItem = (route: RouteLocationNormalizedLoaded) => {
      const next = closeItem(route)
      if (next) {
        router.push(next.path)
      } else {
        router.push('/')
      }
    }

    return {
      tabs,
      route,
      onCloseItem,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.tabs {
  flex-wrap: nowrap;
  margin: 0 16px;
  padding-top: 10px;
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  height: $tabs-height;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  .tabs-item {
    display: inline-block;
    line-height: 26px;
    padding: 0 28px 0 14px;
    border: 1px solid mix($primary, #fff, 50);
    border-radius: 6px 12px 0 0;
    color: $primary;
    cursor: pointer;
    transition: all 200ms;
    background-color: mix($primary, #fff, 10);
    margin-right: 1px;
    position: relative;
    font-size: 14px;
    box-sizing: border-box;

    &.disabled {
      padding: 0 14px 0 14px;
    }

    &:hover {
      background-color: mix($primary, #fff, 30);
    }

    &.is-active {
      color: #fff;
      background-color: mix($primary, #fff, 80);
      border-color: mix($primary, #fff, 80);

      &:hover {
        background-color: mix($primary, #fff, 100);
      }

      .close-icon {
        &:hover {
          background-color: mix($primary, #fff, 20);
          color: $primary;
        }
      }
    }

    .close-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      font-weight: bold;
      border-radius: 4px;
      transition: all 100ms;

      &:hover {
        background-color: mix($primary, #fff, 20);
      }
    }
  }
}
</style>
