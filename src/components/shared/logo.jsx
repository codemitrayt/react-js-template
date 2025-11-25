import { useNavigate } from 'react-router'
import { appEnv } from '@/constants'

const Logo = () => {
  const naviage = useNavigate()
  return (
    <button
      className="flex items-center justify-center gap-3 cursor-pointer"
      onClick={() => naviage('/')}
    >
      <img
        src={appEnv.APP_FAVICON_LOGO}
        alt="app-logo"
        width={50}
        style={{
          filter:
            'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(2000%) hue-rotate(220deg) brightness(90%) contrast(120%)',
        }}
      />
      <h1 className="font-bold tracking-wider text-lg text-active">
        {appEnv.APP_NAME}
      </h1>
    </button>
  )
}

export default Logo
