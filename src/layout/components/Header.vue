<template>
  <div class="header">
    <div class="left">
      <Breadcrumb />
    </div>
    <div class="right">
      <el-avatar
        :size="32"
        :src="''"
      />
      <el-dropdown @command="onCommand">
        <el-button
          type="text"
          class="username"
        >
          {{ userInfo?.username || 'NA' }}
          <i class="el-icon-caret-bottom" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import { defineComponent, toRefs } from 'vue'
import { useUser } from '/@/models/user'
import { useRouter } from 'vue-router'

type Command = 'exit' | ''
export default defineComponent({
  name: 'Header',
  components: {
    Breadcrumb,
  },
  setup() {
    const onSwitchFold = () => {}
    const onCommand = (e: Command) => {
      if (e === 'exit') {
        logout()
      }
    }
    const { state, logout } = useUser(useRouter())
    const { userInfo } = toRefs(state)
    return {
      onSwitchFold,
      onCommand,
      userInfo,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.header {
  height: $header-height;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: $white;

  .left {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 16px;

    .fold-menu {
      padding: 6px 10px;
      font-size: 18px;
      line-height: 1em;
      color: #454545;
    }
  }

  .right {
    display: flex;
    align-items: center;
    padding: 12px;

    .username {
      color: #333;
      font-size: 14px;
      font-weight: bold;
      margin: 0 32px 0 8px;
    }
  }
}
</style>