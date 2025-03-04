import { axiosInstance } from "@/shared/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"

type RecommendedWinesParams = {
  limit: number
}

const getRecommendedWines = async (params: RecommendedWinesParams) => {
  try {
    const response = await axiosInstance.get('/wines/recommended', { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const useRecommendedWines = (params?: RecommendedWinesParams) => {
  const { data } = useQuery({
    queryKey: ['recommendedWines'],
    queryFn: () => getRecommendedWines(params ? params : { limit: 5 }),
  })

  return { data }
}
