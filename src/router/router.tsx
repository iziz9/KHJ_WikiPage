import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/ErrorPage"
import { ROUTE_PATH } from "./routePath"
import MainPage from "../pages/MainPage"
import WikiPage from "../pages/WikiPage"
import WritePage from "../pages/WritePage"
import EditPage from "../pages/EditPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: ROUTE_PATH.MAIN, element: <MainPage /> },
      { path: ROUTE_PATH.WIKI, element: <WikiPage /> },
      { path: ROUTE_PATH.WRITE, element: <WritePage /> },
      {path: ROUTE_PATH.EDIT, element: <EditPage />}
    ]
  }
])

export default router