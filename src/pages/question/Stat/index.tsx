import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Stat: React.FC<IProps> = () => {
  return <div>Stat</div>
}

export default memo(Stat)
