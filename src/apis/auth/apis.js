import { apiRequest } from '@/request'
import { REQUEST_METHOD } from '@/constants'

const urls = {
  login: '/auth/login',
  register: '/auth/register',
}

const apis = {
  login: ({ data }) =>
    apiRequest({
      data,
      url: urls.login,
      method: REQUEST_METHOD.POST,
    }),
  register: ({ data }) =>
    apiRequest({
      data,
      url: urls.register,
      method: REQUEST_METHOD.POST,
    }),
}

export default apis
