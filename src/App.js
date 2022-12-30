import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Topbar from './components/topbar/Topbar.jsx'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'

import './App.scss'

function App() {
  const Layout = () => {
    return (
      <div>
        <Topbar topbarEffect={true} />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '/shop/all',
          element: <div> shop all</div>,
        },
        {
          path: '/mainlocation/:id',
          element: <div> shop all</div>,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
