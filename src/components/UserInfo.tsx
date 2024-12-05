import { memo } from "react"
import { Link } from "react-router-dom"
import { LOGIN_PATHNAME } from "../router"

interface IProps {
  children?: React.ReactNode
}

const UserInfo: React.FC<IProps> = () => {
  return (
    <>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </>
  )
}

export default memo(UserInfo)
