import { Link } from "react-router-dom"
import { keyframes, styled } from "styled-components"
import Spinner from "../components/Spinner"
import { useState } from "react"
import { updateTitle } from "../utils/generalFunctions"

const TITLE = "Error: 418"

const Landing = () => {
  updateTitle(TITLE)
  const [button, setButton] = useState<boolean>(false)

  const handleClick = () => {
    setButton(true)
  }

  return(
    <div>
        <h1>Oops...<br/> something went wrong</h1>
        <Container onClick={handleClick}>
          <Spinner />
        </Container>
        {button && (
          <Link to = {'login/'}>
              <Button>
                  Login
              </Button>
          </Link>
        )}
    </div>
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
  /* transition: transform 750ms;
  will-change: transform; */
  &:hover {
    animation: ${jump} 0.3s ease-in-out forwards;
  }
`