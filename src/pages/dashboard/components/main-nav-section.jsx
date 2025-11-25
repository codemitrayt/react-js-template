import { User, Users } from 'lucide-react'
import { NavLink } from 'react-router'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks'
import { Separator } from '@/components/ui/separator'
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar'

const userTabs = [
  {
    id: 1,
    title: 'Profile',
    path: '/dashboard',
    icon: User,
    endPoint: 'profile',
  },
]

const adminTabs = [
  {
    id: 3,
    title: 'Users',
    path: '/dashboard',
    icon: Users,
    endPoint: 'users',
    isSeperator: true,
  },
]

const MainNavSection = () => {
  const { user } = useAuth()
  const { open, isMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarContent>
      <SidebarGroup className="space-y-1">
        {[...userTabs, ...(user?.role === 'Admin' ? adminTabs : [])].map(
          (item) => (
            <>
              {item.isSeperator && <Separator />}
              <SidebarMenu key={item.id}>
                <NavLink
                  onClick={() => setOpenMobile(false)}
                  to={`${item.path}/${item.endPoint}`}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center space-x-2 hover:bg-muted p-2 rounded-lg cursor-pointer text-foreground',
                      isActive && 'bg-muted hover:bg-muted'
                    )
                  }
                >
                  <item.icon size={15} />
                  <span
                    className={cn('text-sm', !open && !isMobile && 'hidden')}
                  >
                    {item.title}
                  </span>
                </NavLink>
              </SidebarMenu>
            </>
          )
        )}
      </SidebarGroup>
    </SidebarContent>
  )
}

export default MainNavSection
