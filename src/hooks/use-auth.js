import { useSelector } from 'react-redux'

const useAuth = () => {
  return useSelector((state) => state.auth)
}

export default useAuth
