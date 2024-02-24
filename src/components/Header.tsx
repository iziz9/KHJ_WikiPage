import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../router/routePath'

const Header = () => {
  const navigate = useNavigate()
  const goToHome = () => navigate(ROUTE_PATH.MAIN)

  return (
    <header className="h-12 w-full border-b border-solid border-lightgray flex px-4">
      <div className="m-auto text-main font-extrabold text-2xl cursor-pointer" onClick={() => goToHome()}>
        CODING HUB WIKI
      </div>
    </header>
  )
}

export default Header
