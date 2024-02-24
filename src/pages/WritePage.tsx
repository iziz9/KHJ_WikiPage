import WriteBox from '../components/WriteBox'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import { HandleSubmitType } from '../types/types'

const WritePage = () => {
  const handleSubmit = ({ titleValue, contentValue }: HandleSubmitType) => {
    console.log(titleValue, contentValue)
  }

  return (
    <main>
      <PageTitle>위키 작성</PageTitle>
      <InnerLayout>
        <WriteBox handleSubmit={handleSubmit} />
      </InnerLayout>
    </main>
  )
}

export default WritePage
