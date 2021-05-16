<template>
  <a
    v-if="menu.meta?.link"
    class="el-menu-item menu-link"
    :href="menu.meta?.link"
    :target="menu.meta?.target || 'blank'"
  >
    <i :class="menu.meta?.icon"></i>
    <span>{{ menu.meta?.title }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuLink',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.menu-link {
  display: block;
  text-decoration: none;
}
</style>