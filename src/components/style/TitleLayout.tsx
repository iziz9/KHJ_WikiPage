import { ReactNode } from 'react'

const TitleLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-between items-center">{children}</div>
}

export default TitleLayout
