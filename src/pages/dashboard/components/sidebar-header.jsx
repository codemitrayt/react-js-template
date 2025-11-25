import { useNavigate } from 'react-router'

import { Logo } from '@/components'
import { SidebarHeader } from '@/components/ui/sidebar'

const DashboardSidebarHeader = () => {
  const navigate = useNavigate()

  return (
    <SidebarHeader
      onClick={() => navigate('/')}
      className="cursor-pointer h-[63px] flex items-center justify-center"
    >
      <Logo />
    </SidebarHeader>
  )
}

export default DashboardSidebarHeader
