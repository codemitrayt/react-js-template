import { toast } from 'sonner'
import { Check, TriangleAlert } from 'lucide-react'

export const errorToast = ({ message }) =>
  toast(
    <div className="flex items-center gap-1 text-red-500">
      <TriangleAlert size={15} />
      <span>Error</span>
    </div>,
    {
      description: <span className="text-red-500">{message}</span>,
    }
  )

export const successToast = ({ message }) =>
  toast(
    <div className="flex items-center gap-1 text-green-500">
      <Check size={15} />
      <span>Success</span>
    </div>,
    {
      description: <span className="text-green-500">{message}</span>,
    }
  )
