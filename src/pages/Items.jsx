import './Items.css';
import { useEffect, useState } from 'react';
import { CardList } from '../components/CardList'

export const Items = () => {
  const [ data, setData ] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=recent`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [pageSize]);

  return (
    <div className='container'>
      <h1>7주차 - 2</h1>
      <CardList list={data.list} />
    </div>
  )
}
