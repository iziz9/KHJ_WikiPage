import { useParams } from 'react-router-dom'
import WriteBox from '../components/WriteBox'
import InnerMain from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import { IWiki } from '../types/types'
import { useEffect, useState } from 'react'
import { useWikiStore } from '../store/useWikiStore'

const EditPage = () => {
  const { id } = useParams()
  const { getWikiContent, editWiki } = useWikiStore()
  const [wikiContent, setWikiContent] = useState<IWiki>()

  const handleSubmit = ({ wikiId, title, content }: IWiki) => {
    console.log(wikiId, title, content)
    // editWiki()
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
