import { memo } from "react"
import classnames from "classnames"
import styles from "./QuestionCard.module.scss"
import { Button, Space, Divider, Tag, Popconfirm } from "antd"
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"

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
  const { _id, isStar, title, createdAt, answerCount, isPublished } = itemData

  const nav = useNavigate()

  function publish(id: string) {
    console.log("publish:", id)
    publishQuestion && publishQuestion(id)
  }

  function del(id: string) {
    deleteQuestion && deleteQuestion(id)
  }

  function handleCopy() {}

  function handleDelete() {}

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <div className={styles["left"]}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles["right"]}>
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷:{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider />
      <div className={styles["button-container"]}>
        <div className={styles["left"]}>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles["right"]}>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />}>
              {isStar ? "取消标星" : "标星"}
            </Button>
            <Popconfirm
              title="确定复制该问卷"
              okText="确定"
              cancelText="取消"
              onConfirm={handleCopy}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>
            <Popconfirm
              title="确定删除该问卷"
              okText="确定"
              cancelText="取消"
              onConfirm={handleDelete}
            >
              <Button type="text" size="small" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default memo(QuestionCard)
