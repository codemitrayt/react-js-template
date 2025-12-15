import { appEnv } from '@/constants'

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <img src={appEnv.APP_FAVICON_LOGO} alt="app-logo" width={35} />
      <h1 className="font-bold text-[15px]">{appEnv.APP_NAME}</h1>
    </div>
  )
}

export default Logo
