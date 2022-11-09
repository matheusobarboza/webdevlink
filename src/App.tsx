import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Admin } from './pages/Admin'
import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { AuthRoute } from './routes/AuthRoute'

export interface IApplicationProps {}

export const Router: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/admin' element={<AuthRoute><Admin /></AuthRoute>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}