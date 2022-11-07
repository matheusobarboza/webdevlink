import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Admin } from './pages/Admin'
import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '*',
    element: <Error />
  },
])