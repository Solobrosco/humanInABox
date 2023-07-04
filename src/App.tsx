// import { Routes, Route, BrowserRouter } from "react-router-dom"

// import Spinner from './components/Spinner'
// import Login from './pages/Login'
// import DVDLoading from './components/DvdLoading'
import Landing from "./pages/Landing"

import './App.css'
import { styled } from "styled-components"
import { Link } from "react-router-dom"


function App() {
  return (
    <>
      <Landing />
        <Link to = {'login/'}>
          <Button>
            Login
          </Button>
        </Link>
    </>
  )
}

export default App

const Button = styled.div`
  margin-top: 1em;
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  transition: all 0.2s ease;
  &:hover {
    color: #c9c9c9;
    background-color: #0e0e0e;
  }
  &:focus, &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
