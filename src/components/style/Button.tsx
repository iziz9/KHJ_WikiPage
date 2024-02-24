import { ButtonPropsType } from '../../types/types'

const Button = ({ onClick, children }: ButtonPropsType) => {
  return (
    <button className="bg-main text-white px-4 py-2 rounded" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
