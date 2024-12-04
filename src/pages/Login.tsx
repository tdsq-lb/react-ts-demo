import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Login: React.FC<IProps> = () => {
  return <div>Login</div>
}

export default memo(Login)
