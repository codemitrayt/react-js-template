import { useCallback, useState } from 'react'
import { Loader2, Trash2, AlertTriangle } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

import { cn } from '@/lib/utils'

const ConfirmDeleteButton = ({
  onDelete,
  itemName = 'item',
  text = null,
  isLoading = false,
  className = '',
  variant = 'icon', // 'icon' | 'button' | 'text'
  size = 'md', // 'sm' | 'md' | 'lg'
  showConfirmation = true,
  onSuccess,
  onError,
}) => {
  const [open, setOpen] = useState(false)

  const handleDelete = useCallback(async () => {
    try {
      await onDelete()
      setOpen(false)
      onSuccess?.()
    } catch (error) {
      console.error('Delete failed:', error)
      onError?.(error)
    }
  }, [onDelete, onSuccess, onError])

  const sizeClasses = {
    sm: 'p-1 text-xs',
    md: 'p-2 text-sm',
    lg: 'p-3 text-base',
  }

  const variantClasses = {
    icon: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded transition-colors',
    button:
      'bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/40 rounded-md px-3 py-2',
    text: 'text-red-600 dark:text-red-400 hover:underline',
  }

  const triggerClasses = cn(
    'flex items-center justify-center gap-2 cursor-pointer transition-all',
    sizeClasses[size],
    variantClasses[variant],
    className
  )

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button
          className={triggerClasses}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Delete ${itemName}`}
          type="button"
        >
          <Trash2 size={16} strokeWidth={2} />
          {text && <span>{text}</span>}
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>

          <div className="flex-1">
            <AlertDialogHeader className="p-0 mb-2">
              <AlertDialogTitle className="text-lg font-semibold">
                Delete {itemName}?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                This action cannot be undone. You will permanently lose this{' '}
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {itemName}
                </span>
                {showConfirmation && ' and all associated data'}.
              </AlertDialogDescription>
            </AlertDialogHeader>
          </div>
        </div>

        <AlertDialogFooter className="gap-2 pt-4">
          <AlertDialogCancel
            disabled={isLoading}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className={cn(
              'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'flex items-center gap-2'
            )}
          >
            {isLoading && (
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            )}
            <span>Delete</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeleteButton
