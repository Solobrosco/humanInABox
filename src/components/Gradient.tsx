import { keyframes, styled } from "styled-components"

const Gradient = () =>{
  return (
    <Container>
      <Grade/>
    </Container>
  )
}

export default Gradient

const Animate = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`

const Grade = styled.div`
  height: 10rem;
  width: 10rem;
  background: linear-gradient(-45deg, #424242, #c90000, #000000);
	animation: ${Animate} 18s ease infinite;
  background-size: 600% 400%;
  border-radius: 25%;
`