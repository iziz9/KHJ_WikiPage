import { useEffect, useState } from 'react'
import { PaginationPropsType } from '../types/types'
import { NextIcon, PrevIcon } from '../constants/icons'
import { LIMIT_CONTENT } from '../constants/defaultValues'
import { slicePageGroup } from '../utils/pagination'

const Pagination = ({ page, setPage, totalContent }: PaginationPropsType) => {
  const [totalPageGroup, setTotalPageGroup] = useState<number[][]>([])
  const [currentPageGroup, setCurrentPageGroup] = useState<number[]>([])
  const totalPage = Math.ceil(totalContent / LIMIT_CONTENT)

  useEffect(() => {
    const slicedPageGroup = slicePageGroup(totalPage)
    setTotalPageGroup(slicedPageGroup)
    setCurrentPageGroup(slicedPageGroup[0])
  }, [totalPage])

  useEffect(() => {
    if (page === totalPage) {
      setCurrentPageGroup(totalPageGroup[totalPageGroup.length - 1])
    } else if (page % LIMIT_CONTENT === 1) {
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT_CONTENT)])
    } else if (page % LIMIT_CONTENT === 0) {
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT_CONTENT) - 1])
    }
  }, [page, totalPage, totalPageGroup])

  return (
    <nav className="my-4 flex gap-5 justify-center text-gray-500">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        aria-label="이전 페이지로"
        className="hover:text-main cursor-pointer"
      >
        <PrevIcon />
      </button>
      <ol className="flex justify-center gap-4 text-lg" aria-label="페이지">
        {currentPageGroup?.map((i) => (
          <li key={i + 1} onClick={() => setPage(i + 1)} className="cursor-pointer hover:text-main">
            <button
              aria-current={page === i + 1 ? 'page' : undefined}
              className={page === i + 1 ? 'text-main font-semibold' : ''}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
        aria-label="다음 페이지로"
        className="hover:text-main cursor-pointer"
      >
        <NextIcon />
      </button>
    </nav>
  )
}

export default Pagination
