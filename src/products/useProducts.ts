import { useQuery } from "@/hooks/useQuery"
import { Item } from "@/types/Item"

type UseProductsParams = {
  page: number
  pageSize: number
  orderBy: "recent" | "favorite"
  disabled?: boolean
}

export const useProducts = ({
  page,
  pageSize,
  orderBy,
  disabled = false
}: UseProductsParams) => {
  const { data, loading, error } = useQuery<{list: Item[], totalCount: number}>({
    queryUrl: `products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`,
    disabled
  })

  const products = data?.list.map((product) => ({
    ...product,
    price: product.price.toLocaleString(),
    favoriteCount: product.favoriteCount.toLocaleString()
  }))

  return {
    data: products ?? [],
    loading,
    error
  }
}
