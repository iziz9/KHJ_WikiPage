import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import WikiItem from '../components/WikiItem'
import Button from '../components/style/Button'
import InnerLayout from '../components/style/InnerLayout'
import PageTitle from '../components/style/PageTitle'
import TitleLayout from '../components/style/TitleLayout'
import { ROUTE_PATH } from '../router/routePath'

const MainPage = () => {
  const navigate = useNavigate()
  const goToWritePage = () => navigate(ROUTE_PATH.WRITE)
  return (
    <main>
      <TitleLayout>
        <PageTitle>위키 리스트</PageTitle>
        <Button onClick={() => goToWritePage()}>추가</Button>
      </TitleLayout>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          <WikiItem />
          <WikiItem />
          <WikiItem />
          <WikiItem />
          <WikiItem />
        </ul>
      </InnerLayout>
      <Pagination />
    </main>
  )
}

export default MainPage
