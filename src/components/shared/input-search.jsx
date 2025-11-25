import { useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useDebounce } from '@/hooks'
import { Input } from '@/components/ui/input'

const InputSearch = ({ text, fn, placeholder, className, showIcon = true }) => {
  const [localSearch, setLocalSearch] = useState(text)
  const debouncedSearch = useDebounce(localSearch)

  useEffect(() => {
    fn(debouncedSearch)
  }, [debouncedSearch])

  return (
    <div className="relative w-full">
      {showIcon && (
        <SearchIcon className="absolute left-3 top-2 h-4 w-4 text-gray-500" />
      )}
      <Input
        className={cn(
          'w-full sm:max-w-sm h-8 p-0 m-0 px-3 py-1.5',
          className,
          showIcon && 'pl-8'
        )}
        type="text"
        placeholder={placeholder}
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  )
}

export default InputSearch
