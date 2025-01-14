import { ItemList } from "@/components/ItemList"
import { Item } from "@/types/Item"
import { useEffect, useState } from "react"
import '@/styles/ItemPage.css'
import Head from "next/head"

const DefaultPage = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite")
      .then((res) => res.json())
      .then((response) => {
        setData(response.list);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1 role="loading">Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>default</title>
      </Head>
      <div>
        <h1>Default Page</h1>
        <ItemList data={data} />
      </div>
    </>
  )
}

export default DefaultPage
