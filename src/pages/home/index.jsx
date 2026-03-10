import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'
import Hero from '../dashboard'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return (
    <div className="h-full flex flex-col ">
     <Hero/>
    </div>
  )
}

export default HomePage
