import { TSupplyInfo } from '@/types'
import dayjs from 'dayjs'

const date = dayjs('2021-06-21').valueOf()

export const supplyInfos: TSupplyInfo[] = Array.from({ length: 6 }).flatMap((_, i) => [
  {
    id: `${(i * 3) + 1}`,
    organization: {
      type: '醫院',
      name: '臺大醫院',
      city: '臺北市',
    },
    items: [
      {
        id: 1,
        name: '維尼熊',
        amount: 200,
        unit: '隻',
        expiredAt: date,
      },
      {
        id: 2,
        name: '維尼熊',
        amount: 200,
        unit: '隻',
        expiredAt: date,
      },
      {
        id: 3,
        name: '維尼熊',
        amount: 200,
        unit: '隻',
        expiredAt: date,
      },
    ],
  },
  {
    id: `${(i * 3) + 2}`,
    organization: {
      type: '消防局',
      name: '淡水消防局',
      city: '新北市',
    },
    items: [
      {
        id: 1,
        name: 'N95',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
      {
        id: 2,
        name: 'N95',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
      {
        id: 3,
        name: 'N95',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
      {
        id: 4,
        name: 'N95',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
    ],
  },
  {
    id: `${(i * 3) + 3}`,
    organization: {
      type: '警察局',
      name: '臥龍派出所',
      city: '桃園市',
    },
    items: [
      {
        id: 1,
        name: '誠實豆沙包',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
      {
        id: 2,
        name: '誠實豆沙包',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
      {
        id: 3,
        name: '誠實豆沙包',
        amount: 200,
        unit: '個',
        expiredAt: date,
      },
    ],
  },
])
