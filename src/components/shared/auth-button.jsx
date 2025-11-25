import { useAuth } from '@/hooks'
import { LogOutButton } from '@/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AuthButton = () => {
  const { user } = useAuth()
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex items-center gap-1">
        <Avatar className="flex items-center justify-center size-5">
          <AvatarImage src={user?.avatar?.url} alt="profile-picture" />
          <AvatarFallback className="flex bg-foreground items-center text-xs justify-center w-full h-full text-card">
            {user?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h1 className="font-medium text-sm hidden sm:block">{user.fullName}</h1>
      </div>
      <LogOutButton />
    </div>
  )
}

export default AuthButton
