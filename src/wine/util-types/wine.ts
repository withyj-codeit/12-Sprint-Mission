export enum WineType {
  Red = 'RED',
  White = 'WHITE',
  Sparkling = 'SPARKLING',
}

export type Wine = {
  id: number,
  name: string,
  region: string,
  image: string,
  price: number,
  type: WineType,
  avgRating: number,
  reviewCount: number,
  recentReview: {
    user: {
      id: number,
      nickname: string,
      image: string
    },
    updatedAt: string,
    createdAt: string,
    content: string,
    aroma: string[],
    rating: number,
    id: number
  },
  userId: number
}

export type WineFilterParams = {
  name?: string
  type?: WineType
}
