import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const NotFound: React.FC<IProps> = () => {
  return <div>NoFound</div>
}

export default memo(NotFound)
