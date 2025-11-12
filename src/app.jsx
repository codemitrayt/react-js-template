import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { PersistGate } from 'redux-persist/integration/react'

import AppRoutes from './routes'
import store, { persistor } from './store'

function App() {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
              <AppRoutes />
              <Toaster position="bottom-right" closeButton={true} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </div>
    </div>
  )
}

export default App
