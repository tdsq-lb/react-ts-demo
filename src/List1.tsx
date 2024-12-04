import { memo, useState } from 'react'
import { produce } from 'immer'
import { useTitle } from 'ahooks'
import QuestionCard from './components/QuestionCard'

interface IProps {
  children?: React.ReactNode
}

const List1: React.FC<IProps> = () => {
  useTitle('222')
  //   const questionList = [
  //     { id: 'q1', title: '问卷1', isPublished: false },
  //     { id: 'q2', title: '问卷2', isPublished: true },
  //     { id: 'q3', title: '问卷3', isPublished: false },
  //     { id: 'q4', title: '问卷4', isPublished: true },
  //     { id: 'q5', title: '问卷5', isPublished: false },
  //   ]

  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
    { id: 'q5', title: '问卷5', isPublished: false },
  ])

  function add() {
    // setQuestionList([...questionList, { id: 'q6', title: '问卷6', isPublished: false }])
    setQuestionList(
      produce((draft) => {
        draft.push({ id: 'q6', title: '问卷6', isPublished: false })
      })
    )
  }

  function deleteQuestion(id: string) {
    // console.log('id', id)
    // setQuestionList(questionList.filter((item) => item.id != id))
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((q) => q.id == id)
        draft.splice(index, 1)
      })
    )
  }

  function publishQuestion(id: string) {
    // setQuestionList(
    //   questionList.map((item) => {
    //     if (item.id != id) return item
    //     return {
    //       ...item,
    //       isPublished: true,
    //     }
    //   })
    // )
    setQuestionList(
      produce((draft) => {
        const q = draft.find((item) => item.id == id)
        if (q) q.isPublished = true
      })
    )
  }

  return (
    <div className="App">
      <h1>问卷列表页</h1>
      <div>
        {questionList.map((question) => {
          return (
            <QuestionCard
              key={question.id}
              itemData={question}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <button onClick={add}>add</button>
    </div>
  )
}

export default memo(List1)
