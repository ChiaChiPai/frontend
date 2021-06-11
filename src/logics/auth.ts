import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { authApi, registerApi } from '@/api'
import { RegisterDonatorArgs, RegisterOrgArgs, LoginArgs } from '@/types'

import type { TokenObtainPair } from '@/api'

export const userId = useStorage<string>('user_id', '')
export const userToken = useStorage<string>('access_token', '')
export const userRefreshToken = useStorage<string>('fresh_token', '')

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

      if (user.remember) {
        userToken.value = access
        userRefreshToken.value = refresh
      }

      result.value = data
      loading.value = false

      router.push('/')
    }).catch((err: Error) => {
      loading.value = false
      error.value = err
      // eslint-disable-next-line no-console
      console.error(err)
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

  function registerDonator(data: RegisterDonatorArgs) {
    const {
      username,
      password,
      passwordConfirm,
      tel,
      otherContactType,
      otherContent,
    } = data

    const loading = ref(true)
    const error = ref<any>(null)

    registerApi.registerDonatorCreate({
      username,
      password,
      confirmed_password: passwordConfirm,
      phone: tel,
      other_contact_method: otherContactType,
      other_contact: otherContent || '',
    }).then(({ data }) => {
      const { id } = data
      userId.value = `${id}`
      loading.value = false
      return login({
        username,
        password,
        remember: true,
      })
    }).catch((err: Error) => {
      loading.value = false
      error.value = err.message
      // eslint-disable-next-line no-console
      console.error(err)
    })

    return {
      loading,
      error,
    }
  }

  function registerOrg(data: RegisterOrgArgs) {
    const {
      username,
      password,
      passwordConfirm,
      tel,
      otherContactType,
      otherContent,
      orgType,
      orgTypeOther,
      orgCity,
      orgAddress,
      orgOfficeHours,
      orgName,
    } = data

    const loading = ref(true)
    const error = ref<any>(null)

    registerApi.registerOrganizationCreate({
      username,
      password,
      confirmed_password: passwordConfirm,
      name: orgName,
      type: orgType,
      type_other: orgTypeOther || '',
      city: orgCity,
      phone: tel,
      address: orgAddress,
      office_hours: orgOfficeHours,
      other_contact_method: otherContactType,
      other_contact: otherContent || '',
    }).then(({ data }) => {
      const { id } = data
      userId.value = `${id}`
      loading.value = false
      return login({
        username,
        password,
        remember: true,
      })
    }).catch((err: Error) => {
      loading.value = false
      error.value = err.message
      // eslint-disable-next-line no-console
      console.error(err)
    })

    return {
      loading,
      error,
    }
  }

  return {
    login,
    loginWithLine,
    loginWithFacebook,
    loginWithTwitter,
    logout,
    isAuthorized,
    resetPassword,
    registerDonator,
    registerOrg,
  }
}
