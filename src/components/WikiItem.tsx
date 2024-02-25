import { useNavigate } from 'react-router-dom'
import { IWiki } from '../types/types'

const WikiItem = ({ wiki }: { wiki: IWiki }) => {
  const navigate = useNavigate()
  const goToWikiPage = () => navigate('/wiki/' + wiki.wikiId)

  return (
    <li className="h-12 border-b cursor-pointer flex items-center" onClick={() => goToWikiPage()}>
      <span className="font-semibold text-lg px-2">{wiki.title}</span>
    </li>
  )
}

export default WikiItem
