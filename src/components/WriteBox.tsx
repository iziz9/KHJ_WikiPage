import { useEffect, useRef } from 'react'
import { WriteBoxPropsType } from '../types/types'
import Button from './style/Button'
import { useWikiStore } from '../store/useWikiStore'

const WriteBox = ({ wikiContent, handleSubmit }: WriteBoxPropsType) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const { totalWikiList } = useWikiStore()
  const newWikiId = totalWikiList.length + 1

  useEffect(() => {
    if (wikiContent && titleRef.current && contentRef.current) {
      titleRef.current.value = wikiContent.title
      contentRef.current.value = wikiContent.content
    }
  }, [wikiContent])

  const formSubmitAction = () => {
    const title = titleRef?.current?.value
    const content = contentRef?.current?.value

    if (wikiContent && title && content) {
      handleSubmit({ wikiId: wikiContent.wikiId, title, content })
    } else if (title && content) handleSubmit({ wikiId: newWikiId, title, content })
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault()
        formSubmitAction()
      }}
    >
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        ref={titleRef}
        minLength={2}
        required
        className="w-full p-3 border-b-2 text-lg"
      />
      <textarea
        placeholder="내용을 입력해주세요."
        ref={contentRef}
        className="w-full h-96 p-3 border-2 rounded"
        minLength={2}
        required
      />
      <div className="text-center">
        <Button>완료</Button>
      </div>
    </form>
  )
}

export default WriteBox
