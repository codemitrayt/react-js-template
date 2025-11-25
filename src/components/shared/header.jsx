import { Logo } from '@/components'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <nav className="h-14 border-b flex items-center">
      <div className="cotainer mx-auto w-full px-4 flex items-center justify-between">
        <Logo />
        <div className="flex gap-2">
          <Button>Sign In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
