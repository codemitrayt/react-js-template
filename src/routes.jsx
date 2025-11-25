import { BrowserRouter, Routes, Route } from 'react-router'

import { AppLayout, AuthLayout, DashboardLayout } from './pages'
import { HomePage, NotFoundPage, SignInPage, SignUpPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />

            <Route path="auth" element={<AuthLayout />}>
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="sign-up" element={<SignUpPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="user" element={<div>User</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
