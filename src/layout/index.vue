<template>
  <div class="layout">
    <Asidebar />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Asidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Asidebar,
    Content,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.layout {
}
</style>
