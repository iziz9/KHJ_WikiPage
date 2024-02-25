import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import WikiItem from '../components/WikiItem'
import Button from '../components/style/Button'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import TitleLayout from '../components/style/TitleLayout'
import { ROUTE_PATH } from '../router/routePath'
import { useEffect, useState } from 'react'
import { getWikiList } from '../api/request'
import { IWiki } from '../types/types'
import { LIMIT_CONTENT } from '../constants/defaultValues'

const MainPage = () => {
  const navigate = useNavigate()
  const goToWritePage = () => navigate(ROUTE_PATH.WRITE)
  const [totalWikiList, setTotalWikiList] = useState<IWiki[]>([])
  const [currentWikiList, setCurrentWikiList] = useState<IWiki[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const requestGetWikiList = async () => {
      try {
        const wikiRes = await getWikiList()
        console.log(wikiRes)
        setTotalWikiList(wikiRes.result)
      } catch (err) {
        console.error(err)
      }
    }
    requestGetWikiList()
  }, [])

  useEffect(() => {
    if (totalWikiList.length) {
      setCurrentWikiList(
        totalWikiList.slice(page * LIMIT_CONTENT - LIMIT_CONTENT, page * LIMIT_CONTENT),
      )
    }
  }, [page, totalWikiList])

  return (
    <main>
      <TitleLayout>
        <PageTitle>위키 리스트</PageTitle>
        <Button onClick={() => goToWritePage()}>추가</Button>
      </TitleLayout>
      {currentWikiList.length ? (
        <>
          <InnerLayout>
            <ul className="flex flex-col gap-4">
              {currentWikiList.map((wiki) => (
                <WikiItem wiki={wiki} key={wiki.wikiId} />
              ))}
            </ul>
          </InnerLayout>
          <Pagination page={page} setPage={setPage} totalContent={totalWikiList.length} />
        </>
      ) : (
        <InnerLayout>작성된 위키가 없습니다.</InnerLayout>
      )}
    </main>
  )
}

export default MainPage
