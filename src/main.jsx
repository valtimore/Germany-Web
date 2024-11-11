import React from 'react'
import ReactDOM from 'react-dom/client'
import PrincipalPage from './pages/PrincipalPage.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from './pages/Page404.jsx'

import './css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrincipalPage />,
    errorElement: <Page404 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)