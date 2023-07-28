import { styled } from "styled-components"

const Gradient = () =>{
  return (
    <Container>
      <Grade/>
    </Container>
  )
}

export default Gradient

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`

const Grade = styled.div`
  height: 5rem;
  width: 10rem;
  background: linear-gradient(
  20deg,
  hsl(340, 60%, 65%),
  hsl(${340 - 305}, 64%, 40%),
  hsl(${340 - 200}, 30%, 50%)
  );
`