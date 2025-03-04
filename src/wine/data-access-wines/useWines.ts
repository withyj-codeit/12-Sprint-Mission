import { axiosInstance } from "@/shared/utils/axiosInstance"
import { Wine, WineType } from "@/wine/util-types/wine"
import { useQuery } from "@tanstack/react-query"

type WinesResponse = {
  totalCount: number
  nextCursor: number | null
  list: Wine[]
}

type WinesParams = {
  limit: number
  cursor?: number
  type?: WineType
  minPrice?: number
  maxPrice?: number
  rating?: number
  name?: string
}

const getWines = async (params: WinesParams) => {
  try {
    const response = await axiosInstance.get('/wines', { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const useWines = (params: WinesParams) => {
  const { type, name } = params
  const { data } = useQuery<WinesResponse>({
    queryKey: ['wines', { type, name }],
    queryFn: () => getWines(params),
  })

  return { data }
}
