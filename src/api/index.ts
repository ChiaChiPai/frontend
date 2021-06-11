import { API_ENDPOINT } from '@/constants'
import { AuthApi, RegisterApi, TypeEnum } from './generate'

export const authApi = new AuthApi(undefined, API_ENDPOINT)
export const registerApi = new RegisterApi(undefined, API_ENDPOINT)

export {
  TypeEnum as OrgTypeEnum,
}

export * from './generate'
