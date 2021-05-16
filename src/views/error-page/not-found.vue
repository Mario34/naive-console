<template>
  <div class="not-found">
    <div class="title">
      <code>200 * 2 + 4</code>
    </div>
    <div class="desc">
      您访问的页面不存在
    </div>
    <div class="operation">
      <router-link to="/">
        <el-button type="primary">返回首页</el-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.not-found {
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
