import { axiosInstance } from "@/api/axiosInstance"
import { AxiosResponse } from "axios"
import { useState } from "react"

type UseMutationProps<TData> = {
  mutationUrl: string
  onSuccess?: (data: TData) => void
  onError?: () => void
}

type UseMutationReturns<TData, TVariables> = {
  mutate: (variables?: TVariables) => Promise<AxiosResponse<TData> | undefined>
  data: TData | null
  loading: boolean
  error: unknown
}

export const useMutation = <TData, TVariables>({
  mutationUrl,
  onSuccess,
  onError
}: UseMutationProps<TData>): UseMutationReturns<TData, TVariables> => {
  const [data, setData] = useState<TData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const mutate = async (variables?: TVariables) => {
    setLoading(true)
    try {
      const response = await axiosInstance.post<TData, AxiosResponse<TData>, TVariables>(mutationUrl, variables)
      setData(response.data)
      onSuccess?.(response.data)
      return response
    } catch (err) {
      console.error(err)
      setError(err)
      onError?.()
    } finally {
      setLoading(false)
    }
  }

  return { mutate, data, loading, error }
}
