import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'
import TuningResearchLanding from './components/tunning-page'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return <TuningResearchLanding />
}

export default HomePage
