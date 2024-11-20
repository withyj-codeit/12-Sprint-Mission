import './Items.css';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Pagination } from '../components/Pagination';

export const Items = () => {
  const [ data, setData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ startPage, setStartPage ] = useState(1);
  const pageCount = 5
  const pageSize = 10
  const totalPageCount = data.totalCount ? Math.ceil(data.totalCount / pageSize) : 0;
  const onPrevClick = () => {
    setStartPage(startPage - pageCount)
    setCurrentPage(startPage - pageCount)
  }
  const onNextClick = () => {
    setStartPage(startPage + pageCount)
    setCurrentPage(startPage + pageCount)
  }
  const onPageClick = (e) => {
    setCurrentPage(Number(e.target.dataset.page))
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=10&orderBy=recent`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className='container'>
      <h1>6주차 - 2</h1>
      <div className='cardList'>
        {data.list?.map(({ id, images, ...rest }) => (
          <Card
            key={id}
            imageSrc={images[0] || 'https://i.imgur.com/Kg8Q8Oe.jpeg'}
            {...rest}
          />
        )) ?? '로딩중...'}
      </div>
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
