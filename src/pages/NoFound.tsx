import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const NoFound: React.FC<IProps> = () => {
  return <div>NoFound</div>
}

export default memo(NoFound)
