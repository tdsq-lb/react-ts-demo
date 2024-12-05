import { memo } from "react"
import { useParams } from "react-router-dom"

interface IProps {
  children?: React.ReactNode
}

const Edit: React.FC<IProps> = () => {
  const { id = "" } = useParams()
  // 获取路由参数
  return <div>Edit {id}</div>
}

export default memo(Edit)
