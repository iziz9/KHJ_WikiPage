import { ReactNode } from 'react'

const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>
}

export default PageTitle
