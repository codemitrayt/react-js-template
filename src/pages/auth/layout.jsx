import { Navigate, Outlet } from 'react-router'

import { useAuth } from '@/hooks'

const AuthLayout = () => {
  const { isAuth } = useAuth()
  if (isAuth) return <Navigate to="/" replace={true} />
  return (
    <div className="p-4 h-full">
      <Outlet />
    </div>
  )
}

export default AuthLayout
