import { API_ENDPOINT } from '@/constants'
import { AuthApi } from './generate'

export const authApi = new AuthApi(undefined, API_ENDPOINT)

export * from './generate'
