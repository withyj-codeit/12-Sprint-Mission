import { axiosInstance } from "@/api/axiosInstance"
import { useEffect, useState } from "react"

type UseQueryProps = {
  queryUrl: string
  disabled?: boolean
}

type UseQueryResult<T> = {
  data: T | null
  loading: boolean
  error: unknown
}

export const useQuery = <T>({ queryUrl, disabled = false }: UseQueryProps): UseQueryResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const query = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get<T>(queryUrl)
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
