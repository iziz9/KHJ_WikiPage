import { useNavigate } from 'react-router-dom'
import WriteBox from '../components/WriteBox'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import { useWikiStore } from '../store/useWikiStore'
import { ROUTE_PATH } from '../router/routePath'
import { IWiki } from '../types/types'

const WritePage = () => {
  const { totalWikiList, createNewWiki } = useWikiStore()
  const navigate = useNavigate()

  const handleSubmit = (newWiki: IWiki) => {
    createNewWiki(newWiki)
    try {
      console.log(totalWikiList)
      alert('위키 추가가 완료되었습니다.')
      navigate(ROUTE_PATH.MAIN)
    } catch (err) {
      alert('위키 추가에 실패했습니다.')
    }
  }

  return (
    <main>
      <PageTitle>위키 작성</PageTitle>
      <InnerLayout>
        <WriteBox handleSubmit={handleSubmit} />
      </InnerLayout>
    </main>
  )
}

export default WritePage
