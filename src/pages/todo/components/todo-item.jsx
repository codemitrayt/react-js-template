import { CalendarDays } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'
import DeleteTodo from './delete-todo'

const TodoItem = ({
  title,
  description,
  date,
  isCompleted,
  category,
  onToggle,
  id,
}) => {
  return (
    <Card className={cn('transition-all', isCompleted && 'opacity-70')}>
      <CardContent className="flex gap-4 p-4">
        {/* Checkbox */}
        <Checkbox
          checked={isCompleted}
          onCheckedChange={onToggle}
          className="mt-1"
        />

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3
              className={cn(
                'font-medium leading-none',
                isCompleted && 'line-through text-muted-foreground'
              )}
            >
              {title}
            </h3>

            <Badge variant="secondary">{category}</Badge>
          </div>

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{date}</span>

            <DeleteTodo todoId={id} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TodoItem
