import { ItemList } from "@/components/ItemList"
import { Item } from "@/types/Item"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import '@/styles/ItemPage.css'

export const getStaticProps = (async () => {
  const response = await fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite");
  const data: { list: Item[] } = await response.json();

  return {
    props: {
      data: data.list,
    },
  };
}) satisfies GetStaticProps<{ data: Item[] }>;

const SSGPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>SSG Page</h1>
      <ItemList data={data} />
    </div>
  )
}

export default SSGPage
