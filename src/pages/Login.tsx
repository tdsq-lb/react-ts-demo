import { memo } from "react"
import { useNavigate } from "react-router-dom"

interface IProps {
  children?: React.ReactNode
}

const Login: React.FC<IProps> = () => {
  const nav = useNavigate()
  return (
    <div>
      Login
      <button onClick={() => nav(-1)}>返回</button>
    </div>
  )
}

export default memo(Login)
