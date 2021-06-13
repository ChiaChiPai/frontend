import { API_ENDPOINT } from '@/constants'
import { AuthenticationApi, DefaultApi } from './generate'

export const authApi = new AuthenticationApi(undefined, API_ENDPOINT)
export const registerApi = new DefaultApi(undefined, API_ENDPOINT)

export * from './generate'
