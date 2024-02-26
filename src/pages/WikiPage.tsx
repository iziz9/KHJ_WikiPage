import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/style/Button'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import TitleLayout from '../components/style/TitleLayout'
import { useWikiStore } from '../store/useWikiStore'
import { useEffect, useState } from 'react'
import { IWiki } from '../types/types'

const WikiPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getWikiContent } = useWikiStore()
  const [wikiContent, setWikiContent] = useState<IWiki>()

  const goToEditPage = () => navigate('/edit/' + id)

  useEffect(() => {
    if (id) {
      const wikiRes = getWikiContent(id)
      setWikiContent(wikiRes)
    }
  }, [id, getWikiContent])

  return (
    <main>
      <TitleLayout>
        <PageTitle>{wikiContent?.title}</PageTitle>
        <Button onClick={() => goToEditPage()}>수정</Button>
      </TitleLayout>
      <InnerLayout>
        <div className=" min-h-60 my-5">{wikiContent?.content}</div>
      </InnerLayout>
    </main>
  )
}

export default WikiPage
