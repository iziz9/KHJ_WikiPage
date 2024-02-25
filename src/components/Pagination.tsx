import { useEffect, useState } from 'react'
import { PaginationPropsType } from '../types/types'
import { NextIcon, PrevIcon } from '../constants/icons'
import { LIMIT_CONTENT } from '../constants/defaultValues'

const Pagination = ({ page, setPage, totalContent }: PaginationPropsType) => {
  const [totalPageGroup, setTotalPageGroup] = useState<number[][]>([])
  const [currentPageGroup, setCurrentPageGroup] = useState<number[]>([])
  const totalPage = Math.ceil(totalContent / LIMIT_CONTENT)

  useEffect(() => {
    //컴포넌트 마운트 시 페이지그룹 계산
    const sliceGroupByLimit = (totalPage: number) => {
      const totalPagesArr = Array(totalPage)
        .fill(null)
        .map((_, i) => i)
      return Array(Math.ceil(totalPage / LIMIT_CONTENT))
        .fill(null)
        .map(() => totalPagesArr.splice(0, LIMIT_CONTENT))
    }

    const slicedPageGroup = sliceGroupByLimit(totalPage)
    setTotalPageGroup(slicedPageGroup)
    setCurrentPageGroup(slicedPageGroup[0])
  }, [totalPage])

  useEffect(() => {
    // 현재 화면에 표시될 페이지그룹 설정
    if (page === totalPage) {
      //현재 페이지가 마지막 페이지일 때
      setCurrentPageGroup(totalPageGroup[totalPageGroup.length - 1])
    } else if (page % LIMIT_CONTENT === 1) {
      //1, 6, 11, ... 현재 페이지그룹 배열에서 다음 그룹 배열로 넘겨주기
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT_CONTENT)])
    } else if (page % LIMIT_CONTENT === 0) {
      // 5, 10, ... 페이지를 이동하다가 한 그룹의 마지막 숫자로 돌아오면 이전 그룹으로 이동
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT_CONTENT) - 1])
    }
  }, [page])

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
