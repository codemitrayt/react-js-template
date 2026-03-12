import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'
import TuningResearchLanding from './components/landing'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return <TuningResearchLanding />
}

export default HomePage
