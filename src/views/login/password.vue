<template>
  <div class="login">
    <div class="login-container">
      <div class="logo">
        <img class="logo-img" src="/logo.png" alt="logo">
      </div>
      <div class="title">
        Sign in to Naive Console
      </div>
      <div class="form">
        <n-form ref="formRef" :model="model" :rules="rules">
          <n-form-item path="username" label="Username or email address">
            <n-input v-model:value="model.username" clearable />
          </n-form-item>
          <n-form-item path="password" label="Password">
            <n-input
              v-model:value="model.password"
              type="password"
              clearable
              @keyup.enter.prevent="onConfirmForm"
            />
          </n-form-item>
        </n-form>
        <n-button block type="primary" @click="onConfirmForm">
          Login
        </n-button>
      </div>
      <n-button
        type_="text"
        class="quick-login"
        block
        size="large"
        @click="$router.push({ name: 'login' })"
      >
        Quick login use Github
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  NButton, NIcon, NForm, NFormItem, NInput,
} from 'naive-ui'
import { ref } from 'vue'
import {
  LogoGithub as LogoGithubIcon, Lightning as LightningIcon,
} from '@vicons/carbon'
import { useRouter } from 'vue-router'

const router = useRouter()
const formRef = ref<InstanceType<typeof NForm>>(null)
const model = ref({
  username: '',
  password: '',
})
const rules = {
  username: [
    {
      required: true,
      min: 4,
      max: 24,
    },
  ],
  password: [
    {
      required: true,
      min: 4,
      max: 50,
    },
  ],
}
const onConfirmForm = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      // TODO: 登录逻辑
      router.replace('/')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;

  .login-container {
    width: 340px;
    padding: 32px 16px;
    box-sizing: border-box;
    margin: auto;
  }

  .logo {
    padding: 32px 0 24px;
    text-align: center;

    .logo-img {
      height: 60px;
    }
  }

  .title {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 16px;
  }

  .form {
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #e9e9e9;
    background-color: #fff;
  }

  .quick-login {
    margin-top: 16px;
  }
}
</style>
