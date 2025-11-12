import { clsx } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'
import { Check, TriangleAlert } from 'lucide-react'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
