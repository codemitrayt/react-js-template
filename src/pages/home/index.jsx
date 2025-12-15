import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return (
    <div className="h-full flex flex-col p-4">
      <h1>Hero</h1>
    </div>
  )
}

export default HomePage
