import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home, Login, Profile, Infos, Dons, Design} from '../views/screens'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route exact path='/' render={() => <Navigate to='/home' />} />
      <Route exact path={'/home'} element={<Home />} />
      <Route exact path={'/login'} element={<Login />} />
      <Route exact path={'/profile'} element={<Profile />} />
      <Route exact path={'/instruction'} element={<Infos />} />
      <Route exact path={'/design'} element={<Design />} />
      <Route exact path={'/faire-un-don'} element={<Dons />} />
    </Routes>
  </BrowserRouter>
)