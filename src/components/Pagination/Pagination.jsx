import './Pagination.css'

export const Pagination = ({
  currentPage,
  startPage,
  pageCount,
  totalPageCount,
  onPrevClick,
  onNextClick,
  onPageClick,
}) => {
  return (
    <div className='paginationContainer'>
      <button
        onClick={onPrevClick}
        disabled={startPage === 1}
      >
        이전
      </button>
      {totalPageCount && (
        [...Array(pageCount)].map((_, i) => (
          startPage + i <= totalPageCount && (
            <button 
              className={currentPage === startPage + i ? 'selected' : ''}
              onClick={onPageClick}
              data-page={startPage + i}
            >
              {startPage + i}
            </button>
          )
        ))
      )}
      <button
        onClick={onNextClick}
        disabled={startPage + pageCount -1 >= totalPageCount}
      >
        다음
      </button>
    </div>
  )
}
