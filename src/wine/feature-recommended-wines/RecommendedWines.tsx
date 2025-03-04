import { useRecommendedWines } from "@/wine/data-access-wines"
import { WineCardList } from "./WineCardList"

export const RecommendedWines = () => {
  const { data } = useRecommendedWines()

  if (!data) {
    return null
  }

  return (
    <WineCardList
      wines={data}
    />
  )
}
