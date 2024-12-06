import { memo, useState } from "react"
import { Typography, Empty } from "antd"
import { useTitle } from "ahooks"
import styles from "./common.module.scss"
import QuestionCard from "../../components/QuestionCard"

const { Title } = Typography

interface IProps {
  children?: React.ReactNode
}

const rowQuestionList: any = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  }
]

const Star: React.FC<IProps> = () => {
  useTitle("小幕问卷 - 星标问卷")

  const [questionList, setQuestionList] = useState(rowQuestionList)

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["left"]}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles["right"]}>搜索</div>
      </div>
      <div className={styles["content"]}>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 &&
          questionList.map((q: { _id: any }) => {
            const { _id } = q
            return <QuestionCard key={_id} itemData={q} />
          })}
      </div>
      <div className={styles["footer"]}>分页</div>
    </>
  )
}

export default memo(Star)
