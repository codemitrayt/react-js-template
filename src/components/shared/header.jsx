import { useNavigate } from 'react-router'

import { Logo, ThemeToggle } from '@/components'
import { Button } from '@/components/ui/button'

const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className="h-14 border-b flex items-center">
      <div className="cotainer mx-auto w-full px-4 flex items-center justify-between">
        <Logo />
        <div className="flex gap-2 items-center justify-center">
          <Button
            onClick={() => navigate('/auth/sign-in')}
            variant="outline"
            size="sm"
          >
            Get Started
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
