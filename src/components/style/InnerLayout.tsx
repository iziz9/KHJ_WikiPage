import React from 'react'

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-solid border border-lightgray rounded-lg p-5 mt-4">{children}</div>
}

export default InnerLayout
