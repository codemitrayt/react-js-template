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
            <QueryClientProvider client={queryClient}>
              <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <AppRoutes />
                <Toaster position="bottom-right" closeButton={true} />
              </ThemeProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </div>
    </div>
  )
}

export default App
