import { Navigate, Outlet } from 'react-router'

import { useAuth } from '@/hooks'

const AuthLayout = () => {
  const { isAuth } = useAuth()
  // if (isAuth) return <Navigate to="/" replace={true} />
  return <Outlet />
}

export default AuthLayout
