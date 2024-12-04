import { memo } from "react"
import classnames from "classnames"
import styles from "./QuestionCard.module.scss"

interface IProps {
  children?: React.ReactNode
  itemData: any
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: React.FC<IProps> = ({
  itemData,
  deleteQuestion,
  publishQuestion
}) => {
  const { id, title, createdAt, answerCount, isPublished } = itemData

  function publish(id: string) {
    console.log("publish:", id)
    publishQuestion && publishQuestion(id)
  }

  function del(id: string) {
    deleteQuestion && deleteQuestion(id)
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <div className={styles["left"]}>
          <a href="#">{title}</a>
        </div>
        <div className={styles["right"]}>
          {isPublished ? (
            <span style={{ color: "green" }}>已发布</span>
          ) : (
            <span>未发布</span>
          )}
          &nbsp;
          <span>答卷:{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles["button-container"]}>
        <div className={styles["left"]}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles["right"]}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}

export default memo(QuestionCard)
