import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Edit: React.FC<IProps> = () => {
  return <div>Edit</div>
}

export default memo(Edit)
