import { Logo, ThemeToggle } from '@/components'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <nav className="h-14 border-b flex items-center">
      <div className="cotainer mx-auto w-full px-4 flex items-center justify-between">
        <Logo />
        <div className="flex gap-2 items-center justify-center">
          <Button size="sm">Sign In</Button>
          <Button size="sm" variant="outline">
            Sign Up
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
