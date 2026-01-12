import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query'

import { successToast } from '@/lib'
import { setAuth } from '@/store'

import apis from './apis'

const useLogin = () => {
  const dispatch = useDispatch()

  const { mutate, isPending } = useMutation({
    mutationFn: ({ data }) => apis.login({ data }),
    onSuccess: ({ data: response }) => {
      successToast({ message: 'User logged in successfully' })
      dispatch(
        setAuth({
          user: response?.data?.user,
          token: response?.data?.token,
        })
      )
    },
    retry: false,
  })

  return { isLoading: isPending, login: mutate }
}

export default useLogin
