import './Items.css';
import { useEffect, useState } from 'react';
import { Pagination, usePagination } from '../components/Pagination';
import { CardList } from '../components/CardList'

const PAGE_SIZE = 10;
const PAGE_COUNT = 5;

export const Items = () => {
  const [ data, setData ] = useState([]);
  const pageSize = 10;
  const pageCount = 5;
  const { 
    currentPage,
    startPage,
    totalPageCount,
    onPrevClick,
    onNextClick,
    onPageClick
   } = usePagination({
    totalCount: data.totalCount,
    pageSize: PAGE_SIZE,
    pageCount: PAGE_COUNT,
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${pageSize}&orderBy=recent`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className='container'>
      <h1>6주차 - 2</h1>
      <CardList list={data.list} />
      <Pagination
        currentPage={currentPage}
        startPage={startPage}
        pageCount={pageCount}
        totalPageCount={totalPageCount}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onPageClick={onPageClick}
      />
    </div>
  )
}
