import { memo } from "react"
import { Outlet } from "react-router-dom"

interface IProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<IProps> = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default memo(MainLayout)
