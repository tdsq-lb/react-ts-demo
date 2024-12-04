import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Start: React.FC<IProps> = () => {
  return <div>Start</div>
}

export default memo(Start)
