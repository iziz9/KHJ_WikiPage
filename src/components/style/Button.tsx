import React from 'react'

type ButtonPropsType = {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonPropsType) => {
  return (
    <button className="bg-main text-white px-4 py-2 rounded" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
