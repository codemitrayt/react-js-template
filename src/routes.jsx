import { BrowserRouter, Routes, Route } from 'react-router'

import { AppLayout, AuthLayout, TodoDetailPage, TodoPage } from './pages'
import { HomePage, NotFoundPage, SignInPage, SignUpPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
          <Route index element={<HomePage />} />
          <Route path="todos">
            <Route index element={<TodoPage />} />
            <Route path=":todoId" element={<TodoDetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
