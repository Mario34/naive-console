<template>
  <div class="home">
    <div>
      username:
      {{ state.userInfo?.username }}
    </div>
    <el-button
      type="primary"
      @click="getUserInfo"
    >getUserInfo</el-button>
    <el-button @click="clearUserInfo">clearUserInfo</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUser } from '/@/models/user'

export default defineComponent({
  name: 'Home',
  setup() {
    const { state, getUserInfo, clearUserInfo } = useUser()
    return {
      state,
      getUserInfo,
      clearUserInfo,
    }
  },
})
</script>
