import { appEnv } from '@/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="h-10 border-t text-sm flex items-center justify-center">
      © {currentYear} {appEnv.APP_NAME}. All rights reserved.
    </div>
  )
}

export default Footer
