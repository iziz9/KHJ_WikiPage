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
        const editedList = get().totalWikiList.map((wiki) => {
          if (wiki.wikiId === editedWiki.wikiId) return editedWiki
          else return wiki
        })
        set(() => ({ totalWikiList: editedList }))
      },
    }),
    {
      name: 'wikiList',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: IWikiStore) => ({ totalWikiList: state.totalWikiList }),
    },
  ),
)
