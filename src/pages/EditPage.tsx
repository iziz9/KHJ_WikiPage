import WriteBox from '../components/WriteBox'
import InnerMain from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import { HandleSubmitType } from '../types/types'

const EditPage = () => {
  const handleSubmit = ({ titleValue, contentValue }: HandleSubmitType) => {
    console.log(titleValue, contentValue)
  }

  return (
    <main>
      <PageTitle>위키 수정</PageTitle>
      <InnerMain>
        <WriteBox handleSubmit={handleSubmit} />
      </InnerMain>
    </main>
  )
}

export default EditPage
