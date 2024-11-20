import { useState } from "react"

export const usePagination = ({
  totalCount,
  pageSize,
  pageCount,
  initialCurrentPage = 1,
  initialStartPage = 1
}) => {
  const [ currentPage, setCurrentPage ] = useState(initialCurrentPage);
  const [ startPage, setStartPage ] = useState(initialStartPage);
  const totalPageCount = totalCount ? Math.ceil(totalCount / pageSize) : 0

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

  return {
    currentPage,
    startPage,
    pageCount,
    totalPageCount,
    onPrevClick,
    onNextClick,
    onPageClick,
  }
}
