import { useNavigate } from 'react-router-dom'

const WikiItem = () => {
  const wikiId = '1'
  const navigate = useNavigate()
  const goToWikiPage = () => navigate('/wiki/' + wikiId)

  return (
    <li className="h-12 border-b cursor-pointer flex items-center" onClick={() => goToWikiPage()}>
      <span className="font-semibold text-lg px-2">{'게시글 제목'}</span>
    </li>
  )
}

export default WikiItem
