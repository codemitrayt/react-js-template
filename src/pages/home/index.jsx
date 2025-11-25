import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

import HeroSection from './components/hero-section'
import WorkflowCards from './components/workflow-cards'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return (
    <div className="px-4">
      <HeroSection />
      <WorkflowCards />
    </div>
  )
}

export default HomePage
