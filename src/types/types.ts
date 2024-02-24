export type ButtonPropsType = {
  onClick?: () => void
  children: React.ReactNode
}
export type WriteBoxPropsType = {
  handleSubmit: (args: HandleSubmitType) => void
}
export type HandleSubmitType = {
  titleValue: string
  contentValue: string
}
