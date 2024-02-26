import { IWiki } from '../types/types'
import { useState } from 'react'

export const useAutoLink = () => {
  const [linkedContent, setLinkedContent] = useState('')
  const [linkExist, setLinkExist] = useState(false)

  const autoLink = (totalWikiList: IWiki[], wikiContent: string) => {
    totalWikiList.forEach((wiki: IWiki) => {
      const regex = new RegExp(`${wiki.title}(?!\\d)`, 'g')

      if (wikiContent.match(regex) !== null) {
        setLinkExist(true)
        setLinkedContent(
          wikiContent.replaceAll(
            regex,
            `<a class='text-highlight cursor-pointer' href='/wiki/${wiki.wikiId}' alt='${wiki.title}페이지로'>${wiki.title}</a>`,
          ),
        )
      }
    })
    if (!linkExist) setLinkedContent(wikiContent)
  }

  return { autoLink, linkedContent }
}
