<template>
  <div class="login">
    <div class="login__main">
      <h2 class="title">登录</h2>
      <el-form
        ref="form"
        :model="formData"
        status-icon
        :rules="rules"
        size="medium"
      >
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            autocomplete="off"
            clearable
            placeholder="请输入账户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            autocomplete="off"
            clearable
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="onLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
      <el-divider>快捷登录</el-divider>
      <div class="other-login">
        <div class="other-login-item">
          <Icons
            class="icon"
            icon="wechat"
          /> Wechat
        </div>
        <div class="other-login-item">
          <Icons
            class="icon"
            icon="google"
          /> Google
        </div>
        <div class="other-login-item">
          <Icons
            class="icon"
            icon="apple"
          /> Apple
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Icons from './components/Icons'
import { useRouter } from 'vue-router'
import { useUser } from '/@/models/user'

export default defineComponent({
  name: 'Login',
  components: {
    Icons,
  },
  setup() {
    const form = {
      username: '',
      password: '',
    }
    const rules = {}
    const router = useRouter()
    const { login } = useUser(router)
    const onLogin = () => {
      login({}).then(() => {
        router.push({
          name: 'home',
        })
      })
    }
    return {
      formData: reactive(form),
      rules,
      onLogin,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.login {
  min-height: 540px;
  height: 100vh;
  background-color: mix($primary, $white, 4);
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    text-align: center;
    margin: 0 0 20px;
  }

  &__main {
    width: 400px;
    border-radius: 8px;
    overflow: hidden;
    background-color: $white;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.04);

    box-sizing: border-box;
    padding: 32px;

    .login-btn {
      width: 100%;
      font-size: 18px;
    }

    .other-login {
      display: flex;
      justify-content: space-between;

      &-item {
        line-height: 34px;
        padding: 0 10px;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        justify-content: center;
        border: 1px solid #f0f0f0;
        cursor: pointer;
        width: 100px;
        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: 100px;
        box-sizing: border-box;

        &:hover {
          background-color: mix($primary, $white, 4);
        }

        .icon {
          height: 20px;
          width: 20px;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
