import { useParams } from 'react-router'

const TodoDetailPage = () => {
  const { todoId } = useParams()
  return <div>Todo ID: {todoId}</div>
}

export default TodoDetailPage
