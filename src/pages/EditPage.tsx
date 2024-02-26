import { useNavigate, useParams } from 'react-router-dom'
import WriteBox from '../components/WriteBox'
import InnerMain from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import { IWiki } from '../types/types'
import { useEffect, useState } from 'react'
import { useWikiStore } from '../store/useWikiStore'
import { ROUTE_PATH } from '../router/routePath'

const EditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getWikiContent, editWiki } = useWikiStore()
  const [wikiContent, setWikiContent] = useState<IWiki>()

  const handleSubmit = (editedWiki: IWiki) => {
    try {
      editWiki(editedWiki)
      alert('위키 수정이 완료되었습니다.')
      navigate(ROUTE_PATH.MAIN)
    } catch (err) {
      alert('위키 수정에 실패했습니다.')
    }
  }

  useEffect(() => {
    if (id) {
      const wikiRes = getWikiContent(id)
      setWikiContent(wikiRes)
    }
  }, [id, getWikiContent])

  return (
    <main>
      <PageTitle>위키 수정</PageTitle>
      <InnerMain>
        <WriteBox handleSubmit={handleSubmit} wikiContent={wikiContent} />
      </InnerMain>
    </main>
  )
}

export default EditPage
