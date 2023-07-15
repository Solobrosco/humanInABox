import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import pages
import App from './App.tsx'
import Login from './pages/Login.tsx'
import Splash from './pages/Splash.tsx'

import './index.css'

// Router
const router = createBrowserRouter ([
  {
    path: 'humanInABox/',
    element: <App />
  },
  {
    path: 'humanInABox/login',
    element: <Login />
  },
  {
    path: 'humanInABox/splash',
    element: <Splash />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <RouterProvider router={router} />
)
