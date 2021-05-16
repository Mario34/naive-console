<template>
  <div
    class="content"
    :class="{
      'menu-fold': menuConfig.isFold
    }"
  >
    <Header />
    <Tabs />
    <div class="content-route">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import Tabs from './Tabs.vue'
import { useMenu } from '../use-config'

export default defineComponent({
  name: 'Content',
  components: {
    Tabs,
    Header,
  },
  setup() {
    const { menuConfig } = useMenu()
    return {
      menuConfig,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.content {
  margin-left: $menu-width;
  min-height: 100vh;
  background-color: mix($primary, $white, 6);

  &.menu-fold {
    margin-left: 64px;
    transition: margin 300ms;
  }

  .content-route {
    margin: 0 16px;
    padding: 16px;
    box-sizing: border-box;
    min-height: calc(100vh - #{$header-height} - #{$tabs-height});
    background-color: $white;
  }
}
</style>