import { OtherContactMethodEnum, OrgTypeEnum, CityEnum } from '@/api'

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
  otherContactType: OtherContactMethodEnum
  otherContent: string | undefined
}

export interface RegisterOrgArgs extends RegisterDonatorArgs {
  orgType: OrgTypeEnum
  orgTypeOther: string | undefined
  orgName: string
  orgCity: CityEnum
  orgAddress: string
  orgOfficeHours: string
}
