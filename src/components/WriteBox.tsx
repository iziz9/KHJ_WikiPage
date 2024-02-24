import { useRef } from 'react'
import { WriteBoxPropsType } from '../types/types'
import Button from './style/Button'

const WriteBox = ({ handleSubmit }: WriteBoxPropsType) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const formSubmitAction = () => {
    const titleValue = titleRef?.current?.value
    const contentValue = contentRef?.current?.value
    if (titleValue && contentValue) {
      handleSubmit({ titleValue, contentValue })
    }
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
