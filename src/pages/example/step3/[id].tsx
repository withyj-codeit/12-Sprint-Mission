import { ButtonList } from "@/components/ButtonList"
import { CreatingProductModal } from "@/components/CreatingProductModal"
import { ItemList } from "@/components/ItemList"
import { useProducts } from "@/products/useProducts"
import { useRouter } from "next/router"
import { useState } from "react"

const Page = () => {
  const [open, setOpen] = useState(false)
  const [order, setOrder] = useState<"recent" | "favorite">("recent")
  const router = useRouter()
  const { data: favoriteProducts, loading: favoriteProductsLoading } = useProducts({
    page: 1,
    pageSize: 3,
    orderBy: "favorite"
  })
  const { data: products, loading: productsLoading } = useProducts({
    page: Number(router.query.id),
    pageSize: 8,
    orderBy: order,
    disabled: isNaN(Number(router.query.id))
  })

  return (
    <div className="page">
      <h1>Step 3</h1>
      <h2>상품 목록</h2>
      <button onClick={() => setOpen((prev) => !prev)}>상품 등록</button>
      <div>
        <button onClick={() => setOrder('recent')}>최신순</button>
        <button onClick={() => setOrder('favorite')}>인기순</button>
      </div>
      <ButtonList/>
      {productsLoading ? <p>Loading...</p> : <ItemList data={products} />}
      <h2>인기 상품</h2>
      {favoriteProductsLoading ? <p>Loading...</p> : <ItemList data={favoriteProducts} />}
      <CreatingProductModal open={open} onCloseClick={() => setOpen(false)} />
    </div>
  );
}

export default Page;
