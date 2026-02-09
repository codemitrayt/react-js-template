import { TODOS } from '@/constants'

import TodoItem from './todo-item'

const TodoList = ({ todos = TODOS, onToggleTodo = () => {} }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.todo}
          description={todo.todo}
          date={new Date().toLocaleDateString()}
          isCompleted={todo.completed}
          category={'UI'}
          onToggle={() => onToggleTodo(todo.id)}
        />
      ))}
    </div>
  )
}

export default TodoList
