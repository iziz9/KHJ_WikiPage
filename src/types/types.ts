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
  cachedWikiList: IWiki[]
  saveWikiList: (wikilist: IWiki[]) => void
  modifyWikiList: (wikiId: IWiki) => void
}
