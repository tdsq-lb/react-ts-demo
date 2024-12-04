import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Register: React.FC<IProps> = () => {
  return <div>Register</div>
}

export default memo(Register)
