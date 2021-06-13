import { ContactMethods, OrganizationTypes } from '@/api'
import { InputChildren } from '@/types'

export const otherContactItems: InputChildren[] = [
  {
    text: '無',
    value: ContactMethods.NotSet,
  },
  {
    text: 'Line',
    value: ContactMethods.Line,
  },
  {
    text: 'Facebook',
    value: ContactMethods.Fb,
  },
  {
    text: 'Email',
    value: ContactMethods.Email,
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
    value: OrganizationTypes.Hospital,
  },
  {
    text: '警局',
    value: OrganizationTypes.PoliceStation,
  },
  {
    text: '消防局',
    value: OrganizationTypes.FireDepartment,
  },
  {
    text: '其他',
    value: OrganizationTypes.Other,
  },
]

export const initialValues = {
  otherContactType: ContactMethods.NotSet,
  invoice: 'no',
}
