import { request } from '@/request'
import { REQUEST_METHOD } from '@/constants'

const urls = {
  me: () => '/auth/me',
  login: () => '/auth/login',
  register: () => '/auth/register',
  verifyEmail: () => '/auth/verify-email',
  resetPassword: () => '/auth/reset-password',
  forgotPassword: () => '/auth/forgot-password',
  verifyPhoneNumber: () => '/auth/verify-phone-number',
}

const apis = {
  login: ({ data }) =>
    request({
      data,
      url: urls.login(),
      method: REQUEST_METHOD.POST,
    }),
}

export default apis
