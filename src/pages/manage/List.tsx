import { memo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Typography } from "antd"
import styles from "./common.module.scss"
import QuestionCard from "../../components/QuestionCard"

const { Title } = Typography

interface IProps {
  children?: React.ReactNode
}

const rowQuestionList = [
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
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  },
  {
    _id: "q5",
    title: "问卷5",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "3月10日 13:23"
  }
]

const List: React.FC<IProps> = () => {
  const [questionList, setQuestionList] = useState(rowQuestionList)

  const [searchParams] = useSearchParams()
  console.log("aaaa", searchParams.get("aaa"))
  // 获取路由参数 问号后面的参数

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["left"]}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles["right"]}>搜索</div>
      </div>
      <div className={styles["content"]}>
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q
            return <QuestionCard key={_id} itemData={q} />
          })}
      </div>
      <div className={styles["footer"]}>分页</div>
    </>
  )
}

export default memo(List)
