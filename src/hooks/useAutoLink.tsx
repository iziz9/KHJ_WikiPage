import { IWiki } from '../types/types'
import { useState } from 'react'

export const useAutoLink = () => {
  const [linkedContent, setLinkedContent] = useState('')

  const autoLink = (totalWikiList: IWiki[], wikiContent: string) => {
    totalWikiList.forEach((wiki: IWiki) => {
      const regex = new RegExp(`${wiki.title}(?!\\d)`, 'g')

      if (wikiContent.match(regex) !== null) {
        setLinkedContent(
          wikiContent.replaceAll(
            regex,
            `<a class='text-highlight cursor-pointer' href='/wiki/${wiki.wikiId}' alt='${wiki.title}페이지로'>${wiki.title}</a>`,
          ),
        )
      }
    })
  }

  return { autoLink, linkedContent }
}
