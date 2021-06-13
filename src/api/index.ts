import { API_ENDPOINT } from '@/constants'
import { AuthenticationApi, RegisterApi } from './generate'

export const authApi = new AuthenticationApi(undefined, API_ENDPOINT)
export const registerApi = new RegisterApi(undefined, API_ENDPOINT)

export * from './generate'
