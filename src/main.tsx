import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.tsx'

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
