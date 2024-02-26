import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/style/Button'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import TitleLayout from '../components/style/TitleLayout'
import { useWikiStore } from '../store/useWikiStore'
import { useEffect, useState } from 'react'
import { IWiki } from '../types/types'
import { useAutoLink } from '../hooks/useAutoLink'

const WikiPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { totalWikiList, getWikiContent } = useWikiStore()
  const { autoLink, linkedContent } = useAutoLink()
  const [wikiContent, setWikiContent] = useState<IWiki>({ wikiId: 0, title: '', content: '' })

  useEffect(() => {
    if (id) {
      const wikiRes = getWikiContent(id)
      wikiRes && setWikiContent(wikiRes)
    }
  }, [id, getWikiContent])

  useEffect(() => {
    if (totalWikiList.length && wikiContent) {
      autoLink(totalWikiList, wikiContent.content)
    }
  }, [totalWikiList, wikiContent, autoLink])

  const goToEditPage = () => navigate('/edit/' + id)

  return (
    <main>
      <TitleLayout>
        <PageTitle>{wikiContent?.title}</PageTitle>
        <Button onClick={() => goToEditPage()}>수정</Button>
      </TitleLayout>
      <InnerLayout>
        <div dangerouslySetInnerHTML={{ __html: linkedContent }} className="min-h-60 my-5" />
      </InnerLayout>
    </main>
  )
}

export default WikiPage
