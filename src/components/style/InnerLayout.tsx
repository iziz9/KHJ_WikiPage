import { ReactNode } from 'react'

const InnerLayout = ({ children }: { children: ReactNode }) => {
  return <div className="border-solid border border-lightgray rounded-lg p-5 mt-4">{children}</div>
}

export default InnerLayout
