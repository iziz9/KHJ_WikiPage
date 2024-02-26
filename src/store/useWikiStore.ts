import { create } from 'zustand'
import { IWikiStore } from '../types/types'
import { descendingSort } from '../utils/sort'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useWikiStore = create(
  persist(
    (set, get) => ({
      totalWikiList: [],
      setTotalWikiList: (wikiList) => {
        set(() => ({
          totalWikiList: descendingSort([...get().totalWikiList, ...wikiList]),
        }))
      },
      createNewWiki: (newWiki) => {
        set(() => ({
          totalWikiList: descendingSort([...get().totalWikiList, newWiki]),
        }))
      },
      getWikiContent: (wikiId) => get().totalWikiList.find((wiki) => +wikiId === wiki.wikiId),
      editWiki: (editedWiki) => {
        // 수정하고 다시 set
        set(() => ({ totalWikiList: [...get().totalWikiList, editedWiki] }))
      },
    }),
    {
      name: 'wikiList',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: IWikiStore) => ({ totalWikiList: state.totalWikiList }),
    },
  ),
)
