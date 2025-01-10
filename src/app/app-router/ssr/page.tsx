import { ItemList } from "@/components/ItemList"
import { Item } from "@/types/Item"

const SSRPage = async () => {
  const fetchData = async () => {
    const response = await fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite", { cache: "no-store" });
    const data: { list: Item[] } = await response.json();
    return data.list;
  }
  const data = await fetchData();

  return (
    <div>
      <h1>SSR Page</h1>
      <ItemList data={data} />
    </div>
  )
}

export default SSRPage
