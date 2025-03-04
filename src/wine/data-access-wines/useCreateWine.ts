import { axiosInstance } from "@/shared/utils/axiosInstance"
import { Wine, WineType } from "@/wine/util-types/wine"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useRouter } from "next/router"

type WinesResponse = {
  totalCount: number
  nextCursor: number | null
  list: Wine[]
}

type WineInput = {
  name: string
  region: string
  image: string
  price: number
  type: WineType
}

const createWine = async (input: WineInput) => {
  try {
    const response = await axiosInstance.post("/wines", input)
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

const DEFAULT_WINE_DATA = {
  id: 0,
  name: '',
  region: '',
  image: '',
  price: 0,
  type: WineType.Red,
  avgRating: 0,
  reviewCount: 0,
  recentReview: {
    user: {
        id: 0,
        nickname: '',
        image: '',
    },
    updatedAt: '',
    createdAt: '',
    content: '',
    aroma: [''],
    rating: 0,
    id: 0,
  },
  userId: 0,
}

export const useCreateWine = () => {
  const router = useRouter()
  const { type, name } = router.query
  const queryClient = useQueryClient()

  const { mutate } = useMutation<Wine, AxiosError, WineInput, { previousWines?: WinesResponse }>({
    mutationFn: createWine,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['wines', { type, name }] })
    },
    onMutate: async (inputData) => {
      await queryClient.cancelQueries({ queryKey: ['wines', { type, name }] })

      const previousWines = queryClient.getQueryData<WinesResponse>(['wines', { type, name }])
      const newWine = { ...DEFAULT_WINE_DATA, ...inputData }

      if (previousWines) {
        queryClient.setQueryData<WinesResponse>(
          ['wines', { type, name }],
          (oldWines) => (
            oldWines
              ? { ...oldWines, list: [newWine, ...previousWines.list] }
              : { totalCount: 1, nextCursor: null, list: [newWine] })
        )
      }

      return { previousWines }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['wines', { type, name }] })
    },
  })
  return { mutate }
}
