import { toast } from 'sonner'
import { TriangleAlert, CheckCircle2, AlertTriangle, X } from 'lucide-react'

export const errorToast = ({ message }) =>
  toast.custom(
    (t) => (
      <div className="relative bg-linear-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg shadow-lg p-4 min-w-[320px] max-w-md">
        <button
          onClick={() => toast.dismiss(t)}
          className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <div className="shrink-0 mt-0.5">
            <div className="bg-red-500 rounded-full p-1.5">
              <TriangleAlert size={18} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-red-900 text-sm mb-1">Error</h3>
            <p className="text-red-700 text-sm leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-200 rounded-b-lg overflow-hidden">
          <div className="h-full bg-red-500 animate-[shrink_4s_linear_forwards]" />
        </div>
      </div>
    ),
    { duration: 4000 }
  )

export const successToast = ({ message }) =>
  toast.custom(
    (t) => (
      <div className="relative bg-linear-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg shadow-lg p-4 min-w-[320px] max-w-md">
        <button
          onClick={() => toast.dismiss(t)}
          className="absolute top-2 right-2 text-green-400 hover:text-green-600 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <div className="shrink-0 mt-0.5">
            <div className="bg-green-500 rounded-full p-1.5">
              <CheckCircle2 size={18} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-green-900 text-sm mb-1">
              Success
            </h3>
            <p className="text-green-700 text-sm leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200 rounded-b-lg overflow-hidden">
          <div className="h-full bg-green-500 animate-[shrink_4s_linear_forwards]" />
        </div>
      </div>
    ),
    { duration: 4000 }
  )

export const warningToast = ({ message }) =>
  toast.custom(
    (t) => (
      <div className="relative bg-linear-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 rounded-lg shadow-lg p-4 min-w-[320px] max-w-md">
        <button
          onClick={() => toast.dismiss(t)}
          className="absolute top-2 right-2 text-amber-400 hover:text-amber-600 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <div className="shrink-0 mt-0.5">
            <div className="bg-amber-500 rounded-full p-1.5">
              <AlertTriangle size={18} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-900 text-sm mb-1">
              Warning
            </h3>
            <p className="text-amber-700 text-sm leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-200 rounded-b-lg overflow-hidden">
          <div className="h-full bg-amber-500 animate-[shrink_4s_linear_forwards]" />
        </div>
      </div>
    ),
    { duration: 4000 }
  )
