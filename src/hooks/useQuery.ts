import { axiosInstance } from "@/api/axiosInstance"
import { useEffect, useState } from "react"

type UseQueryProps = {
  queryUrl: string
  disabled?: boolean
}

type UseQueryReturns<TData> = {
  data: TData | null
  loading: boolean
  error: unknown
}

export const useQuery = <TData>({ queryUrl, disabled = false }: UseQueryProps): UseQueryReturns<TData> => {
  const [data, setData] = useState<TData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const query = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get<TData>(queryUrl)
        setData(response.data)
      } catch (err) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    if (!disabled) {
      query()
    }
  }, [queryUrl, disabled])

  return { data, loading, error }
}
