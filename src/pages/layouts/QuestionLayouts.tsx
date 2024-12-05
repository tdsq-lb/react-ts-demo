import { memo } from "react"
import { Outlet } from "react-router-dom"

interface IProps {
  children?: React.ReactNode
}

const QuestionLayouts: React.FC<IProps> = () => {
  return (
    <div>
      QuestionLayouts
      <Outlet />
    </div>
  )
}

export default memo(QuestionLayouts)
