export enum OrderType {
  DESC = 'desc',
  ASC = 'asc',
}

export const order: OrderType = OrderType.DESC // 'desc'

export const FruitConst = {
  Apple: '사과',
  Banana: '바나나',
  Orange: '오렌지',
} as const

export type FruitConstType = typeof FruitConst[keyof typeof FruitConst]

export const fruitItem: FruitConstType = '바나나'
