import './App.css'
import styled, { keyframes } from 'styled-components'
// import DVDLoading from './components/DvdLoading'
// import Loading from './components/Loading'
// import Login from './pages/Login'

function App() {
  return (
    <div>
      <Spinner></Spinner>
      <h1>Failed successfully</h1>
      {/* <button onSubmit={Login}>Login</button>
      <Loading></Loading> */}
    </div>
  )
}

export default App
const AnimateSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
    display: inline-block;
    height: 2em;
    width: 3em;
    border: 10px solid;
    border-top-color: #4d2aff;
    border-bottom-color: #ff462a;
    border-left-color: #2aff5c;
    border-right-color: #fff82a;
    border-radius: 50%;
    animation: ${AnimateSpin} 0.00002s linear infinite;
`