import { SearchIcon, X } from 'lucide-react'
import { useEffect, useCallback, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { useDebounce } from '@/hooks'
import { Input } from '@/components/ui/input'

const InputSearch = ({
  text = '',
  fn,
  placeholder = 'Search...',
  className = '',
  showIcon = true,
  showClear = true,
  disabled = false,
  debounceDelay = 500,
  onSearchStart,
  onSearchEnd,
}) => {
  const searchRef = useRef(text)
  const [localSearch, setLocalSearch] = useState(text)

  const debouncedSearch = useDebounce(localSearch, debounceDelay)

  useEffect(() => {
    fn(debouncedSearch)
  }, [debouncedSearch, fn])

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value
      searchRef.current = value
      setLocalSearch(value)
      onSearchStart?.()
    },
    [onSearchStart]
  )

  const handleClear = useCallback(() => {
    searchRef.current = ''
    setLocalSearch('')
    fn('')
    onSearchEnd?.()
  }, [fn, onSearchEnd])

  useEffect(() => {
    if (text !== searchRef.current) {
      searchRef.current = text
      setLocalSearch(text)
    }
  }, [text])

  return (
    <div className="relative w-full group">
      {showIcon && (
        <SearchIcon
          className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors',
            'text-blue-500 animate-pulse'
          )}
          aria-hidden="true"
        />
      )}

      <Input
        className={cn(
          'w-full h-9 px-3 py-2 transition-all focus:outline-none! focus:ring-0!',
          'focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          showIcon && 'pl-9',
          showClear && localSearch && 'pr-9',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        type="text"
        placeholder={placeholder}
        value={localSearch}
        onChange={handleChange}
        disabled={disabled}
        aria-label="Search input"
        autoComplete="off"
      />

      {showClear && localSearch && !disabled && (
        <button
          onClick={handleClear}
          className={cn(
            'absolute right-3 top-1/2 -translate-y-1/2 p-1',
            'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
            'transition-colors rounded hover:bg-gray-100 dark:hover:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-blue-500'
          )}
          aria-label="Clear search"
          type="button"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export default InputSearch
