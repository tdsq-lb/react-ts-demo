import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Home: React.FC<IProps> = () => {
  return <div>Home</div>
}

export default memo(Home)
