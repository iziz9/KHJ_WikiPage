import { IWiki } from '../types/types'

export const descendingSort = (arr: IWiki[]) => {
  return arr.sort((a: IWiki, b: IWiki) => b.wikiId - a.wikiId)
}
