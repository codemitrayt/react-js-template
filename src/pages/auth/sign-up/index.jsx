import { usePageTitle } from '@/hooks'
import { pageTitle } from '@/constants'

import SignUpForm from './components/signup-form'
import RegisterIllustration from './components/register-illustration'

const SignUpPage = () => {
  usePageTitle({ title: pageTitle.SIGN_UP_PAGE })

  return (
    <div className="h-full flex">
      <RegisterIllustration />

      <div className="hidden lg:flex items-center">
        <div className="h-[80%] w-px bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <SignUpForm />
    </div>
  )
}

export default SignUpPage
