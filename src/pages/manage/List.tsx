import { memo, useState } from 'react'
import styles from './List.module.scss'
import QuestionCard from '../../components/QuestionCard'

interface IProps {
  children?: React.ReactNode
}

const rowQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q5',
    title: '问卷5',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
]

const List: React.FC<IProps> = () => {
  const [questionList, setQuestionList] = useState(rowQuestionList)

  return (
    <>
      <div className={styles['header']}>
        <div className={styles['left']}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles['right']}>搜索</div>
      </div>
      <div className={styles['content']}>
        {questionList.map((q) => {
          const { _id } = q
          return <QuestionCard key={_id} itemData={q} />
        })}
      </div>
      <div className={styles['footer']}>分页</div>
    </>
  )
}

export default memo(List)
