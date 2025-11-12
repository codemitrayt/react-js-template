import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

const SignInPage = () => {
  usePageTitle({ title: pageTitle.SIGN_IN_PAGE })
  return <div>Sign In Page</div>
}

export default SignInPage
