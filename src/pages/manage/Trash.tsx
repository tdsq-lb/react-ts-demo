import { memo, useState } from "react"
import { Typography, Empty, Table, Tag, Button, Space, Modal } from "antd"
import { useTitle } from "ahooks"
import styles from "./common.module.scss"
import { ExclamationCircleOutlined } from "@ant-design/icons"

const { Title } = Typography
const { confirm } = Modal

interface IProps {
  children?: React.ReactNode
}

const rowQuestionList: any = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
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

const Trash: React.FC<IProps> = () => {
  useTitle("小幕问卷 - 回收站")

  const [questionList, setQuestionList] = useState(rowQuestionList)

  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title"
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      }
    },
    {
      title: "答卷",
      dataIndex: "answerCount"
    },
    {
      title: "创建时间",
      dataIndex: "createdAt"
    }
  ]

  // 记录选中的 id
  const [selectedIds, setSelectedIds] = useState<React.Key[]>([])

  function handleDel() {
    confirm({
      title: "是否确认删除？",
      icon: <ExclamationCircleOutlined />,
      content: "删除以后不可找回",
      onOk: () => alert(`删除 ${JSON.stringify(selectedIds)}`)
    })
  }

  const TableElement = (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button
            danger
            disabled={selectedIds.length === 0}
            onClick={handleDel}
          >
            删除
          </Button>
        </Space>
      </div>
      <Table
        columns={tableColumns}
        dataSource={questionList}
        pagination={false}
        rowKey="_id"
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys: React.Key[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`)
            setSelectedIds(selectedRowKeys)
          }
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["left"]}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles["right"]}>搜索</div>
      </div>
      <div className={styles["content"]}>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 && TableElement}
      </div>
      <div className={styles["footer"]}>分页</div>
    </>
  )
}

export default memo(Trash)
