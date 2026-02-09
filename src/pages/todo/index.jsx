import { useGetTodoList } from '@/apis'
import TodoHeader from './components/todo-header'
import TodoList from './components/todo-list'

const TodoPage = () => {
  const { refetch, data, isLoading } = useGetTodoList({ params: {} })
  if (isLoading) return <div> Loading ....</div>
  return (
    <div className="flex flex-col gap-3 p-4">
      <TodoHeader />
      <TodoList todos={data} />
    </div>
  )
}

export default TodoPage
