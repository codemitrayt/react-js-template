import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

import SignInForm from './components/sign-in-form'

const SignInPage = () => {
  usePageTitle({ title: pageTitle.SIGN_IN_PAGE })
  return (
    <div className="h-full flex items-center justify-center py-10">
      <SignInForm />
    </div>
  )
}

export default SignInPage
