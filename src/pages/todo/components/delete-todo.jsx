import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import React from 'react'

const DeleteTodo = ({ todoId }) => {
  // api
  return (
    <Button variant="destructive" size="icon">
      <Trash />
    </Button>
  )
}

export default DeleteTodo
