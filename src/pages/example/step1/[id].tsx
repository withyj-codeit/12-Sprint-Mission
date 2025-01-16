import { axiosInstance } from "@/api/axiosInstance"
import { ButtonList } from "@/components/ButtonList"
import { ItemList } from "@/components/ItemList"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Page = () => {
  const [bestProducts, setBestProducts] = useState([])
  const [products, setProducts] = useState([])
  const [bestProductsLoading, setBestProductsLoading] = useState(true)
  const [productsLoading, setProductsLoading] = useState(true)
  const [order, setOrder] = useState<"recent" | "favorite">("recent")
  const router = useRouter()

  useEffect(() => {
    if (!router.query.id) return
    const getProducts = async () => {
      setProductsLoading(true)
      try {
        const response = await axiosInstance.get(`products?page=${router.query.id}&pageSize=8&orderBy=${order}`)
        setProducts(response.data.list)
      } catch (error) {
        console.error(error)
      } finally {
        setProductsLoading(false)
      }
    }
    getProducts()
  }, [router.query.id, order])

  useEffect(() => {
    const getBestProducts = async () => {
      setBestProductsLoading(true)
      try {
        const response = await axiosInstance.get("products?page=1&pageSize=3&orderBy=favorite")
        setBestProducts(response.data.list)
      } catch (error) {
        console.error(error)
      } finally {
        setBestProductsLoading(false)
      }
    }
    getBestProducts()
  }, [])

  return (
    <div className="page">
      <h1>Step 1</h1>
      <h2>상품 목록</h2>
      <div>
        <button onClick={() => setOrder('recent')}>최신순</button>
        <button onClick={() => setOrder('favorite')}>인기순</button>
      </div>
      <ButtonList/>
      {productsLoading ? <p>Loading...</p> : <ItemList data={products} />}
      <h2>인기 상품</h2>
      {bestProductsLoading ? <p>Loading...</p> : <ItemList data={bestProducts} />}
    </div>
  );
}

export default Page;
