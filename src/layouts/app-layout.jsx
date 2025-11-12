import { Footer, Header } from '@/components'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
