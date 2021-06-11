import { data, select_columns } from './tw-county-list.json'

export const TWCountyList = data.map((item) => {
  return {
    text: item[select_columns.indexOf('NAME_2014')],
    value: item[select_columns.indexOf('ISO3166')],
  }
}).filter((item) => {
  return !!item.text
})

export * from './supply'
