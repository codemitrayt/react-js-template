import { usePageTitle } from '@/hooks'
import { pageTitle } from '@/constants'

import LoginForm from './components/login-form'
import LoginIllustration from './components/login-illustration'

const SignInPage = () => {
  usePageTitle({ title: pageTitle.SIGN_IN_PAGE })

  return (
    <div className="h-full flex">
      <LoginIllustration />

      <div className="hidden lg:flex items-center">
        <div className="h-[80%] w-px bg-zinc-200 dark:bg-zinc-600" />
      </div>

      <LoginForm />
    </div>
  )
}

export default SignInPage
