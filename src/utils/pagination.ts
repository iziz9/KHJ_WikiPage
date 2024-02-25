import { LIMIT_CONTENT } from '../constants/defaultValues'

export const slicePageGroup = (totalPage: number) => {
  const totalPagesArr = Array(totalPage)
    .fill(null)
    .map((_, i) => i)
  return Array(Math.ceil(totalPage / LIMIT_CONTENT))
    .fill(null)
    .map(() => totalPagesArr.splice(0, LIMIT_CONTENT))
}
