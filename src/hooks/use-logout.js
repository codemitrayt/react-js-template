import { logout } from '@/store/slices/auth-slice'
import { useDispatch } from 'react-redux'

const useLogout = () => {
  const dispatch = useDispatch()
  const logoutUser = () => dispatch(logout())
  return { logout: logoutUser }
}

export default useLogout
