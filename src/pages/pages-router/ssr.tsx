import { ItemList } from "@/components/ItemList"
import { Item } from "@/types/Item"
import { GetServerSideProps, InferGetStaticPropsType } from "next"
import '@/styles/ItemPage.css'

export const getServerSideProps = (async () => {
  const response = await fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite");
  const data: { list: Item[] } = await response.json();

  return {
    props: {
      data: data.list,
    },
  };
}) satisfies GetServerSideProps<{ data: Item[] }>;

const SSRPage = ({ data }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>SSR Page</h1>
      <ItemList data={data} />
    </div>
  )
}

export default SSRPage
