import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Trash: React.FC<IProps> = () => {
  return <div>Trash</div>
}

export default memo(Trash)
