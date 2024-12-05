import { memo } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button, Typography } from "antd"
import { MANAGE_INDEX_PATHNAME } from "../router"
import styles from "./Home.module.scss"

const { Title, Paragraph } = Typography

interface IProps {
  children?: React.ReactNode
}

const Home: React.FC<IProps> = () => {
  const nav = useNavigate()
  // function clickLogin() {
  //   // nav("/login")
  //   nav({
  //     pathname: "/login",
  //     search: "b=21"
  //   })
  // }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 ｜ 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
