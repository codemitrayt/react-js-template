import { InputSearch } from '@/components'
import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return (
    <div className="h-full flex flex-col p-4">
      <InputSearch
        placeholder="Search users..."
        fn={(value) => console.log('Search:', value)}
      />
    </div>
  )
}

export default HomePage
