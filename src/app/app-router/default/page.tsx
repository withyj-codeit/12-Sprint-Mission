import { ItemList } from "@/components/ItemList"
import { Item } from "@/types/Item"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Default Page",
  description: "Default page",
}

const DefaultPage = async () => {
  const response = await fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite");
  const data: { list: Item[] } = await response.json();

  return (
    <div>
      <h1>SSG Page</h1>
      <ItemList data={data.list} />
    </div>
  )
}

export default DefaultPage
