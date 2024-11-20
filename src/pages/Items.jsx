import './Items.css';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export const Items = () => {
  const [ data, setData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ startPage, setStartPage ] = useState(1);
  const totalPage = data.totalCount ? Math.ceil(data.totalCount / 10) : 0;

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
      <div className='paginationContainer'>
        <button
          onClick={() => {
            setStartPage(startPage - 5)
            setCurrentPage(startPage - 5)
          }}
          disabled={startPage === 1}
        >
          이전
        </button>
        {totalPage && (
          [...Array(5)].map((_, i) => (
            startPage + i <= totalPage && (
              <button 
                className={currentPage === startPage + i ? 'selected' : ''}
                onClick={() => setCurrentPage(startPage + i)}
              >
                {startPage + i}
              </button>
            )
          ))
        )}
        <button
          onClick={() => {
            setStartPage(startPage + 5)
            setCurrentPage(startPage + 5)
          }}
          disabled={startPage + 5 -1 >= totalPage}
        >
          다음
        </button>
      </div>
    </div>
  )
}
