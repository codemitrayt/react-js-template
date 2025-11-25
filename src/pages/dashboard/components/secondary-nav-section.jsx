import { LogOut } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useLogout } from '@/hooks'

import { SidebarFooter, SidebarMenu, useSidebar } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

const SecondaryNavSection = () => {
  const { open, isMobile } = useSidebar()
  const { logout } = useLogout()

  return (
    <SidebarFooter>
      <Separator />
      <SidebarMenu>
        <button
          className={cn(
            'flex items-center cursor-pointer space-x-2 hover:bg-muted p-2 rounded-lg text-foreground'
          )}
          onClick={logout}
        >
          <LogOut size={15} />
          <span className={cn('text-sm', !open && !isMobile && 'hidden')}>
            Logout
          </span>
        </button>
      </SidebarMenu>
    </SidebarFooter>
  )
}

export default SecondaryNavSection
