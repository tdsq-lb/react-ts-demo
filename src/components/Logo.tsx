import { memo } from "react"
import { Space, Typography } from "antd"
import { FormOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styles from "./Logo.module.scss"
const { Title } = Typography

interface IProps {
  children?: React.ReactNode
}

const Logo: React.FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>小幕问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default memo(Logo)
