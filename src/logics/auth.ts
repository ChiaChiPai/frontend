import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage, useFetch } from '@vueuse/core'
import { API_ENDPOINT } from '@/constants'

interface LoginResponse {
  success: boolean
  userId: string
}

interface LogoutResponse {
  success: boolean
}

export interface LoginArgs {
  username: string
  password: string
}

export function useAuth() {
  const router = useRouter()
  const userId = useStorage<string | null>('userId', null)

  function login(user: LoginArgs) {
    const { isFetching, error, data } = useFetch(`${API_ENDPOINT}/login`).json<LoginResponse>().post(user)

    watch(data, (v) => {
      if (!error.value && v) {
        router.push('/')
        userId.value = v.userId
      }
    })

    return {
      loading: isFetching,
    }
  }

  function logout() {
    const { isFetching, error, data } = useFetch(`${API_ENDPOINT}/logout`).json<LogoutResponse>().post()

    watch(data, (v) => {
      if (!error.value && v) {
        router.push('/')
        userId.value = null
      }
    })

    return {
      loading: isFetching,
    }
  }

  return {
    userId,
    login,
    logout,
  }
}
