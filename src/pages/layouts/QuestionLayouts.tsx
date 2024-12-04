import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const QuestionLayouts: React.FC<IProps> = () => {
  return <div>QuestionLayouts</div>
}

export default memo(QuestionLayouts)
