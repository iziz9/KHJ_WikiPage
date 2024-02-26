import { create } from 'zustand'
import { IWiki } from '../types/types'

interface IWikiStore {
  totalWikiList: IWiki[]
  setTotalWikiList: (wikiList: IWiki[]) => void
  createNewWiki: (newWiki: IWiki) => void
  getWikiContent: (wikiId: string) => IWiki | undefined
  editWiki: (editedWiki: IWiki) => void
}

export const useWikiStore = create<IWikiStore>((set, get) => ({
  totalWikiList: [],
  setTotalWikiList: (wikiList) => {
    set(() => ({ totalWikiList: [...get().totalWikiList, ...wikiList].sort() })) //재진입 시 초기화됨
  },
  createNewWiki: (newWiki) => {
    set(() => ({
      totalWikiList: [...get().totalWikiList, newWiki].sort(
        (a: IWiki, b: IWiki) => b.wikiId - a.wikiId,
      ),
    }))
  },
  getWikiContent: (wikiId) => get().totalWikiList.find((wiki) => +wikiId === wiki.wikiId),
  editWiki: (editedWiki) => {
    // 수정하고 다시 set
    set(() => ({ totalWikiList: [...get().totalWikiList, editedWiki] }))
  },
}))
