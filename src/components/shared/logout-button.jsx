import { LogOut } from 'lucide-react'
import { useAuth, useLogout } from '@/hooks'

const LogOutButton = ({ isText }) => {
  const { isAuth } = useAuth()
  const { logout } = useLogout()

  if (!isAuth) return null

  const baseClasses = 'cursor-pointer'
  const iconClasses = isText
    ? 'hover:text-primary transition-all space-x-2 flex items-center text-muted-foreground w-full px-3 py-1'
    : 'hover:text-muted-foreground'

  return (
    <button onClick={logout} className={`${baseClasses} ${iconClasses}`}>
      <LogOut className="size-4" />
      {isText && <span className="text-sm">Logout</span>}
    </button>
  )
}

export default LogOutButton
