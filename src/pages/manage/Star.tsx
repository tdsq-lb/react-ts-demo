import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Star: React.FC<IProps> = () => {
  return <div>Start</div>
}

export default memo(Star)
