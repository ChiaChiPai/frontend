import { OtherContactMethodEnum, OrgTypeEnum } from '@/api'
import { InputChildren } from '@/types'

export const otherContactItems: InputChildren[] = [
  {
    text: '無',
    value: OtherContactMethodEnum.NotSet,
  },
  {
    text: 'Line',
    value: OtherContactMethodEnum.Line,
  },
  {
    text: 'Facebook',
    value: OtherContactMethodEnum.Fb,
  },
  {
    text: 'Email',
    value: OtherContactMethodEnum.Email,
  },
]

export const needInvoiceItems: InputChildren[] = [
  {
    text: '是',
    value: 'yes',
  },
  {
    text: '否',
    value: 'no',
  },
]

export const orgTypes: InputChildren[] = [
  {
    text: '醫院',
    value: OrgTypeEnum.Hospital,
  },
  {
    text: '警局',
    value: OrgTypeEnum.PoliceStation,
  },
  {
    text: '消防局',
    value: OrgTypeEnum.FireDepartment,
  },
  {
    text: '其他',
    value: OrgTypeEnum.Other,
  },
]

export const initialValues = {
  otherContactType: OtherContactMethodEnum.NotSet,
  invoice: 'no',
}
