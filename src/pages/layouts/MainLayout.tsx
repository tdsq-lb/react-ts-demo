import { memo } from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import Logo from "../../components/Logo"
import UserInfo from "../../components/UserInfo"
import styles from "./MainLayout.module.scss"

const { Header, Footer, Content } = Layout

interface IProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<IProps> = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>小幕问卷&nbsp;</Footer>
    </Layout>
  )
}

export default memo(MainLayout)
