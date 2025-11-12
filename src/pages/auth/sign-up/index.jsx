import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

const SignUpPage = () => {
  usePageTitle({ title: pageTitle.SIGN_UP_PAGE })
  return <div>Sign Up Page</div>
}

export default SignUpPage
