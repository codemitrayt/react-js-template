import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return <div className="h-full flex flex-col p-4">Home Page</div>
}

export default HomePage
