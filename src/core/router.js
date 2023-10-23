import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home, Login} from '../views/screens'

// Main router which handle user navigation
export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route exact path='/' render={() => <Navigate to='/home' />} />
      <Route exact path={'/home'} element={<Home />} />
      <Route exact path={'/login'} element={<Login />} />
    </Routes>
  </BrowserRouter>
)