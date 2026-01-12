import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query'

import { setAuth } from '@/store'
import { successToast } from '@/lib'

import apis from './apis'

const useRegister = () => {
  const dispatch = useDispatch()

  const { isPending, mutate } = useMutation({
    mutationFn: ({ data }) => apis.register({ data }),
    onSuccess: () => {
      successToast({ message: 'User registered successfully' })
      dispatch(
        setAuth({
          user: response?.data?.user,
          token: response?.data?.token,
        })
      )
    },
    retry: false,
  })

  return { isLoading: isPending, register: mutate }
}

export default useRegister
