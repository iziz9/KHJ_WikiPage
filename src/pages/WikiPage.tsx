import { useNavigate } from 'react-router-dom'
import Button from '../components/style/Button'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import TitleLayout from '../components/style/TitleLayout'
import { ROUTE_PATH } from '../router/routePath'

const WikiPage = () => {
  // const params = useParams()
  const navigate = useNavigate()
  const goToEditPage = () => navigate(ROUTE_PATH.EDIT)
  return (
    <main>
      <TitleLayout>
        <PageTitle>{'위키제목'}</PageTitle>
        <Button onClick={() => goToEditPage()}>수정</Button>
      </TitleLayout>
      <InnerLayout>
        <div>{'위키내용'}</div>
      </InnerLayout>
    </main>
  )
}

export default WikiPage
