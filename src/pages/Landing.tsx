// React Typescript
import { keyframes, styled } from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Functions
import { updateTitle } from "../utils/generalFunctions"

// Components
import Spinner from "../components/Spinner"
import Gradient from "../components/Gradient"

// Constants
const TITLE = "Error: 418"

// Fake Error page with hidden links 
const Landing = () => {
  // Displaying Error 418 on Tab Title
  updateTitle(TITLE)
  // login button state
  const [button, setButton] = useState<boolean>(false)
  // splashpage button state
  const [isVisible, setisVisible] = useState<boolean>(false)

  // Displays a button to the login page
  const handleClick = () => {
    setButton(true)
  }

  // Delayed button load for splashpage
  useEffect(() => {
    const timer = setTimeout(() => {
      setisVisible(true);
    }, 9000); // Set the desired delay in milliseconds (e.g., 3000 for 3 seconds)

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts before the delay
    };
  }, []);

  return(
    <Container>

      <h1>Oops...<br/> something went wrong</h1>

      <Grow onClick={handleClick}>
        <Spinner />
      </Grow>

      {button && (
        <Link to = {'login/'}>
          <Button>
            Login
          </Button>
        </Link>
      )}

      <Link to = {'splash/'}>
        <Button style={{ display: isVisible ? 'block' : 'none' }}>
          Splash
        </Button>
      </Link>
      <Gradient></Gradient>
    </Container>
  )
}

export default Landing

const jump = keyframes`
  from{
    transform: scale(1.0)
  }
  to{
    transform: scale(1.2)
  }
`

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

const Container = styled.div`
  padding: 5rem;
`

const Grow = styled.div`
  &:hover {
    animation: ${jump} 0.3s ease-in-out forwards;
  }
`