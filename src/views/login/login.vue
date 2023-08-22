<template>
  <div class="login-container">
    <div class="desc">
      <h1 class="title">Yozica Admin</h1>
      <p class="else">If you want to know more information, please visit my <YoLink :href="href">github</YoLink>.
      </p>
    </div>
    <div class="loginBox">
      <n-input type="text" v-model:value="loginForm.username" :placeholder="$t('login.usernameInput')" />
      <n-input type="password" v-model:value="loginForm.password" show-password-on="click"
        :placeholder="$t('login.passwordInput')" />
      <n-button type="primary" :onclick="loginFn">{{ $t('login.loginButton') }}</n-button>
    </div>
    <div class="language">
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <n-button>语言</n-button>
      </n-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import router from '@/router';
import { login } from '@/api/user'
import { useUserStore } from '@/store'
import { YoLink } from '@/components'
import { setTokenTime } from '@/utils/auth';

const message = useMessage()
const i18n = useI18n()
const userStore = useUserStore()

const href = ref<string>('https://github.com/yozica/Yo-Vue3-Admin')

interface loginFormProps {
  username: string
  password: string
}

const loginForm = reactive<loginFormProps>({
  username: 'yozica',
  password: '123456'
})

const loginFn = async () => {
  const { data } = await login(loginForm)
  localStorage.setItem('token', data.token)
  userStore.setToken(data.token)
  setTokenTime()
  message.success('登录成功')
  router.push('/')
}

const currentLanguage = ref(i18n.locale.value)

const options = reactive([
  {
    label: '英语',
    key: 'en',
    disabled: false
  },
  {
    label: '中文',
    key: "zh-CN",
    disabled: false
  }
])

watch(
  currentLanguage,
  () => {
    options.forEach(item => {
      if (item.key === currentLanguage.value) {
        item.disabled = true
      } else {
        item.disabled = false
      }
    })
  },
  { deep: true, immediate: true }
)

const handleSelect = (key: string, item: any) => {
  localStorage.setItem('lang', key)
  i18n.locale.value = key
  currentLanguage.value = key
  message.success(`语言已切换为 ${item.label}`)
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
  gap: 100px;

  // 页面填充
  .desc {
    .title {
      position: relative;
      font-weight: 700;
      font-size: 80px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 80%;
        height: 100%;
        background-image: linear-gradient(to right, #4460f1, #c471ed, #f64f59);
        z-index: -1;
        filter: blur(70px);
      }
    }

    .else {
      font-size: 20px;
    }
  }

  // 登录表单
  .loginBox {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 400px;
    gap: 20px;

    input {
      width: 100%;
      height: 50px;
      border: 0;
      padding: 0 30px;
      margin-bottom: 30px;
      box-shadow: 25px 25px 50px #d4d4d4, -25px -25px 50px #f5f5f5;
      z-index: 0;
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      box-shadow: 25px 25px 50px #d4d4d4, -25px -25px 50px #ffffff;
    }
  }

  // 语言切换模块
  .language {
    position: absolute;
    top: 50px;
    right: 50px;
  }
}

@media (max-width:800px) {
  .login-container {
    flex-direction: column;
    justify-content: center;
    gap: 10vh;

    .title {
      &::before {
        width: 100% !important;
      }
    }
  }
}
</style>