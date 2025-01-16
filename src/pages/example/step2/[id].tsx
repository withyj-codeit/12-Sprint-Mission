import { ButtonList } from "@/components/ButtonList"
import { ItemList } from "@/components/ItemList"
import { useQuery } from "@/hooks/useQuery"
import { Item } from "@/types/Item"
import { useRouter } from "next/router"
import { useState } from "react"

const Page = () => {
  const [order, setOrder] = useState("recent")
  const router = useRouter()
  const { data: favoriteProducts, loading: favoriteProductsLoading } = useQuery<{list: Item[], totalCount: number}>({
    queryUrl: "products?page=1&pageSize=3&orderBy=favorite"
  })
  const { data: products, loading: productsLoading } = useQuery<{list: Item[], totalCount: number}>({
    queryUrl: `products?page=${router.query.id}&pageSize=8&orderBy=${order}`,
    disabled: isNaN(Number(router.query.id))
  })

  return (
    <div className="page">
      <h1>Step 1</h1>
      <h2>상품 목록</h2>
      <div>
        <button onClick={() => setOrder('recent')}>최신순</button>
        <button onClick={() => setOrder('favorite')}>인기순</button>
      </div>
      <ButtonList/>
      {productsLoading ? <p>Loading...</p> : <ItemList data={products ? products.list : []} />}
      <h2>인기 상품</h2>
      {favoriteProductsLoading ? <p>Loading...</p> : <ItemList data={favoriteProducts ? favoriteProducts.list : []} />}
    </div>
  );
}

export default Page;
