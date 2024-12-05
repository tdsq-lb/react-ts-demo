import { memo } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import styles from "./ManageLayout.module.scss"
import { Button, Space, Divider } from "antd"
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined
} from "@ant-design/icons"

interface IProps {
  children?: React.ReactNode
}

const ManageLayouts: React.FC<IProps> = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  // useLocation 用于在函数式组件中获取当前页面的 URL 地址信息

  console.log("pathname", pathname)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav("/manage/list")}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav("/manage/star")}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav("/manage/trash")}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(ManageLayouts)
