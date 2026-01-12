import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppRoutes from './routes'
import store, { persistor } from './store'
import { ThemeProvider } from './providers'

const queryClient = new QueryClient()

function App() {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
              <QueryClientProvider client={queryClient}>
                <AppRoutes />
                <Toaster position="bottom-right" closeButton={true} />
              </QueryClientProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </div>
    </div>
  )
}

export default App
