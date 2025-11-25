import { Navigate, Outlet } from 'react-router'

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { useAuth } from '@/hooks'
import { ModeToggle } from '@/components'

import DashboardSidebar from './components/dashboard-sidebar'

const DashboardLayout = () => {
  const { user, isAuth } = useAuth()

  if (!isAuth) return <Navigate to="/" />

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        <SidebarInset>
          <header className="flex h-16 shrink-0 px-4 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 border-b w-full print:hidden">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1 size-8 md:hidden!" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="md:flex items-center justify-center gap-2 hidden">
                <div className="flex items-center justify-center space-x-2">
                  <Avatar className="flex items-center justify-center size-6">
                    <AvatarImage src={user?.avatar?.url} alt="profile" />
                    <AvatarFallback className="bg-foreground text-card text-sm">
                      {user?.fullName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-foreground text-sm font-medium">
                    {user?.fullName}
                  </h1>
                </div>
              </div>
              <ModeToggle />
            </div>
          </header>
          <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
            <Outlet />
          </div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout
