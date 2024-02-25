export type ButtonPropsType = {
  onClick?: () => void
  children: React.ReactNode
}
export type WriteBoxPropsType = {
  handleSubmit: (args: HandleSubmitType) => void
}
export type PaginationPropsType = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalContent: number
}

export type HandleSubmitType = {
  titleValue: string
  contentValue: string
}
export interface IWiki {
  content: string
  title: string
  wikiId: number
}
