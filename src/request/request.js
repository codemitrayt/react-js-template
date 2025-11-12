import axios from 'axios'

import store from '@/store'
import { errorToast } from '@/lib'
import { logout } from '@/store/slices/auth-slice'
import { appEnv, ERROR_MESSAGE } from '@/constants'

export const performLogout = () => {
  store.dispatch(logout())
  window.location.href = '/'
}

export const axiosInstance = axios.create({
  baseURL: appEnv.BACKEND_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      errorToast({
        message: ERROR_MESSAGE.NETWORK_ERROR,
      })
    } else if (error.response.status === 401) {
      performLogout()
      errorToast({ message: ERROR_MESSAGE.JWT_EXPIRED })
    } else {
      const message =
        error.response.data?.message || ERROR_MESSAGE.INTERNAL_SERVER_ERROR
      errorToast({ message: message })
    }
    return Promise.reject(error)
  }
)

export const request = ({
  url,
  data = {},
  params = {},
  isFormData,
  method,
  ...rest
}) => {
  return axiosInstance({
    url,
    method,
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    },
    params,
    data,
    ...rest,
  })
}
