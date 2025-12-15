import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers'
import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      size="sm"
      className="flex items-center justify-center size-7 px-0"
      variant="outline"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun size={15} className="hidden text-primary [html.dark_&]:block" />
      <Moon size={15} className="block text-black [html.dark_&]:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
