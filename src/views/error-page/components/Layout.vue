<template>
  <div class="status-page-layout">
    <div class="title">
      <code>{{ code }}</code>
    </div>
    <div class="desc">
      {{ desc }}
    </div>
    <div class="operation">
      <slot>
        <router-link to="/">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StatusPageLayput',
  props: {
    code: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.status-page-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: mix($primary, $white, 6);

  .title {
    color: mix($primary, $black, 40);
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 14px;
    margin-bottom: 30px;
  }
}
</style>
