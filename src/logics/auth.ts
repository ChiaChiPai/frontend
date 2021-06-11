import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage, useFetch } from '@vueuse/core'
import { API_ENDPOINT } from '@/constants'
import { AuthApi } from '@/api'
import type { TokenObtainPair } from '@/api'

interface LogoutResponse {
  success: boolean
}

export interface LoginArgs {
  username: string
  password: string
  remember: boolean
}

export function useAuth() {
  const router = useRouter()
  const userToken = useStorage<string>('access_token', '')
  const userRefreshToken = useStorage<string>('fresh_token', '')
  const authApi = new AuthApi(undefined, API_ENDPOINT)

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
    const { isFetching, error, data } = useFetch(`${API_ENDPOINT}/logout`).json<LogoutResponse>().post()

    watch(data, (v) => {
      if (!error.value && v) {
        router.push('/')
        userToken.value = ''
        userRefreshToken.value = ''
      }
    })

    return {
      loading: isFetching,
      error,
    }
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
