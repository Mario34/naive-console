<template>
  <div class="login">
    <div class="login__main">
      <div class="main-left"></div>
      <div class="main-right">
        <h2>登录</h2>
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
            <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
          </el-form-item>
        </el-form>
        <br />
        <el-divider>快捷登录</el-divider>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="other-login">
              <Icons class="icon" icon="wechat" /> Wechat
            </div>
          </el-col>
          <el-col :span="8">
            <div class="other-login">
              <Icons class="icon" icon="google" /> Google
            </div>
          </el-col>
          <el-col :span="8">
            <div class="other-login">
              <Icons class="icon" icon="apple" /> Apple
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Icons from './components/Icons'
import { useRouter } from 'vue-router'

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
    const onLogin = () => {
      router.push({
        name: 'home',
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
.login {
  min-height: 540px;
  height: 100vh;
  background-color: #f0f2f0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__main {
    height: 500px;
    width: 800px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.04);

    .main-left,
    .main-right {
      height: 100%;
      width: 50%;
    }

    .main-left {
      background-image: url("./img/banner.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-color: #c9dff7;
    }

    .main-right {
      box-sizing: border-box;
      padding: 32px;

      .login-btn {
        width: 100%;
        font-size: 18px;
      }

      .other-login {
        line-height: 34px;
        padding: 0 10px;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        cursor: pointer;

        .icon {
          height: 20px;
          width: 20px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
