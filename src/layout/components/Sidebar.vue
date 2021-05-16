<template>
  <div
    class="sidebar"
    :class="{
      'is-collapse': menuConfig.isFold
    }"
  >
    <el-scrollbar class="scroll">
      <div class="header">
        <img
          class="logo"
          src="/@/assets/logo.png"
          alt=""
        />
        <span v-if="!menuConfig.isFold" class="app-name">vite-vue-admin</span>
      </div>
      <el-menu
        :default-active="activeName"
        :collapse="menuConfig.isFold"
        class="menu"
      >
        <MenuItem
          v-for="item in menuList"
          :key="item.path"
          :menu="item"
        />
      </el-menu>
    </el-scrollbar>
    <div class="footer">
      <i
        :class="menuConfig.isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="switchFold"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from '/@/layout/components/MenuItem.vue'
import menuList from '/@/layout/menu'
import { useMenu } from '../use-config'

export default defineComponent({
  name: 'Sidebar',
  components: {
    MenuItem,
  },
  setup() {
    const route = useRoute()
    const activeName = computed(() => {
      return route.path
    })
    const { menuConfig, switchFold } = useMenu()
    return {
      menuList,
      activeName,
      menuConfig,
      switchFold,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

$bg: #f9f9f9;
$active-bg: mix($primary, transparent, 20);
$hover-bg: mix($primary, transparent, 10);
$color: rgb(255 255 255 / 65%);
$height: 48px;
$footer-height: 40px;
$border-color: #f0f0f0;

.sidebar {
  height: 100%;
  width: $menu-width;
  position: fixed;
  overflow-y: auto;
  background-color: $bg;
  border-right: 1px solid $border-color;
  transition: none;

  .scroll {
    height: calc(100% - #{$footer-height});
  }

  .header {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    color: #fff;
    background-color: mix($primary, transparent, 90);
    height: $header-height;
    overflow: hidden;

    .logo {
      height: 26px;
      width: 26px;
    }

    .app-name {
      margin-left: 8px;
    }
  }

  .menu {
    border-right: none;
    margin-bottom: 40px;

    :deep {
      .el-submenu__title,
      .el-menu-item {
        height: $height;
        line-height: $height;

        background-color: $bg;

        &:hover {
          background-color: $hover-bg;
        }

        &.is-active {
          background-color: $active-bg;
        }
      }

      .el-submenu {
        .el-menu {
          background-color: $bg;
        }
      }
    }
  }

  .footer {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 12px;
    color: #fff;
    background-color: mix($primary, transparent, 4);
    height: 40px;
    border-top: 1px solid $border-color;
    box-sizing: border-box;
    color: $text-color2;
  }

  &.is-collapse {
    width: 64px;
    transition: width 300ms;

    .footer {
       justify-content: center;
    }
  }
}
</style>
