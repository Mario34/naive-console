<template>
  <div class="login">
    <div class="login-container">
      <div class="logo">
        <img class="logo-img" src="/logo.png" alt="logo">
      </div>
      <div class="title">
        Sign in to Naive Console
      </div>
      <div class="quick-login">
        <n-button block type="info" size="large">
          <n-icon style="margin-right: 4px;" size="22">
            <LogoGithubIcon />
          </n-icon>
          Continue with Github
        </n-button>
        <n-button block type="primary" size="large">
          <n-icon style="margin-right: 4px;" size="22">
            <LogoGoogleIcon />
          </n-icon>
          Continue with Google
        </n-button>
        <n-button block size="large" @click="$router.push({ name: 'login-password' })">
          <n-icon style="margin-right: 4px;" size="22">
            <EmailIcon />
          </n-icon>
          Continue with Password
        </n-button>
      </div>
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
  LogoGoogle as LogoGoogleIcon, Email as EmailIcon,
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
    margin-bottom: 32px;
  }

  .quick-login {
    margin-top: 16px;

    .desc {
      font-size: 14px;
      color: #555;
      margin-bottom: 6px;
    }

    .n-button {
      & + .n-button {
        margin-top: 12px;
      }
    }
  }
}
</style>
