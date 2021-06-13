import { ContactMethods, OrganizationTypes, Cities } from '@/api'

export type ToSchema<T> = { [P in keyof T]: string }

export type TSupplyInfo = {
  id: string
  organization: {
    type: string
    name: string
    city: string
  }
  name: string
  amount: number
  unit: string
  ended_date: string
}

export interface InputChildren {
  text: string
  value: string
}

export interface LoginArgs {
  username: string
  password: string
}

export interface RegisterDonatorArgs {
  username: string
  email: string
  password: string
  passwordConfirm: string
  tel: string
  invoice: string
  otherContactType: ContactMethods
  otherContent: string | undefined
}

export interface RegisterOrgArgs extends RegisterDonatorArgs {
  orgType: OrganizationTypes
  orgTypeOther: string | undefined
  orgName: string
  orgCity: Cities
  orgAddress: string
  orgOfficeHours: string
}

export interface SupplyProvide {
  amount: number
  date: string
  applyCheck: boolean
}

export interface SupplyOrg {
  type: string
  name: string
  city: string
}

export interface Supply {
  name: string
  amount: number
  unit: '個'
  ended_date: string
  provide: SupplyProvide
}

export interface SupplyInfo {
  id: number
  organization: SupplyOrg
  supplies: Supply[]
}
