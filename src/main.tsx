import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.tsx'
import App from './App.tsx'

import './index.css'

const router = createBrowserRouter ([
  {
    path: 'humanInABox/',
    element: <App />
  },
  {
    path: 'humanInABox/login',
    element: <Login />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <RouterProvider router={router} />
)
