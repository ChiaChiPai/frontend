import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { authApi } from '@/api'
import type { TokenObtainPair } from '@/api'

export const userToken = useStorage<string>('access_token', '')
export const userRefreshToken = useStorage<string>('fresh_token', '')

export interface LoginArgs {
  username: string
  password: string
  remember: boolean
}

export function useAuth() {
  const router = useRouter()

  const isAuthorized = computed(() => {
    return userToken.value !== ''
  })

  function login(user: LoginArgs) {
    const loading = ref(true)
    const result = ref<TokenObtainPair | null>(null)
    const error = ref<any>(null)

    authApi.authTokenCreate({
      username: user.username,
      password: user.password,
    }).then(({ data }) => {
      const { access, refresh } = data

      userToken.value = access
      userRefreshToken.value = refresh

      result.value = data
      loading.value = false

      router.push('/')
    }).catch((err: Error) => {
      loading.value = false
      error.value = err
    })

    return {
      loading,
      error,
    }
  }

  // handle SSO logins
  function loginWithLine() {
    alert('Login with Line')
  }
  function loginWithFacebook() {
    alert('Login with Facebook')
  }
  function loginWithTwitter() {
    alert('Login with Twitter')
  }

  function logout() {
    userToken.value = ''
    userRefreshToken.value = ''
    router.push('/')
  }

  function resetPassword(email: string) {
    alert(email)
  }

  return {
    login,
    loginWithLine,
    loginWithFacebook,
    loginWithTwitter,
    logout,
    isAuthorized,
    resetPassword,
  }
}
