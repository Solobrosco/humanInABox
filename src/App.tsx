import { Routes, Route, BrowserRouter } from "react-router-dom"

// import Spinner from './components/Spinner'
// import Login from './pages/Login'
// import DVDLoading from './components/DvdLoading'
import Landing from "./pages/Landing"
// import Login from './pages/Login'

import './App.css'


function App() {
  return (
      // <Routes>
      //   <Route path="/" element={ <Landing /> } />
      //   <Route path="/login" element={ <Login /> } />
      // </Routes>
      <Landing />
  )
}

export default App
