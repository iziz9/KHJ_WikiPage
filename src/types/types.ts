import { ReactNode } from 'react'

export type ButtonPropsType = {
  onClick?: () => void
  children: ReactNode
}
export type WriteBoxPropsType = {
  wikiContent?: IWiki
  handleSubmit: (wiki: IWiki) => void
}
export type PaginationPropsType = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalContent: number
}
export interface IWiki {
  content: string
  title: string
  wikiId: number
}

export interface IWikiStore {
  totalWikiList: IWiki[]
  setTotalWikiList: (wikiList: IWiki[]) => void
  createNewWiki: (newWiki: IWiki) => void
  getWikiContent: (wikiId: string) => IWiki | undefined
  editWiki: (editedWiki: IWiki) => void
}
