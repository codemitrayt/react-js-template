import { Sidebar } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

import SidebarHeader from './sidebar-header'
import MainNavSection from './main-nav-section'
import SecondaryNavSection from './secondary-nav-section'

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <Separator />
      <MainNavSection />
      <SecondaryNavSection />
    </Sidebar>
  )
}

export default DashboardSidebar
