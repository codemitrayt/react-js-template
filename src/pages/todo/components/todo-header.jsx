import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Filter } from 'lucide-react'

const TodoHeader = () => {
  return (
    <div className="flex flex-col gap-4 border-b pb-4">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Todos</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track your daily tasks
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Todo
        </Button>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-2">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search todos..." className="pl-8" />
        </div>

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  )
}

export default TodoHeader
