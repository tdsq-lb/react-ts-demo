import { memo } from "react"
import { Outlet } from "react-router-dom"
import styles from "./ManageLayouts.module.scss"

interface IProps {
  children?: React.ReactNode
}

const ManageLayouts: React.FC<IProps> = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["left"]}>
        <p>ManageLayouts left</p>
        <button>创建问卷</button>
        <br />
        <a>我的问卷</a>
        <br />
        <a>星标问卷</a>
        <br />
        <a>回收站</a>
      </div>
      <div className={styles["right"]}>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(ManageLayouts)
