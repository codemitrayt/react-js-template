import { useNavigate } from 'react-router'

import { useAuth } from '@/hooks'
import { Button } from '@/components/ui/button'
import { Logo, AuthButton, ModeToggle } from '@/components'

const Header = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  return (
    <nav className="h-14 border-b flex items-center">
      <div className="cotainer mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
        <Logo />
        <div className="flex gap-2 items-center justify-center">
          {isAuth ? (
            <AuthButton />
          ) : (
            <Button onClick={() => navigate('/auth/sign-in')}>Sign In</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
