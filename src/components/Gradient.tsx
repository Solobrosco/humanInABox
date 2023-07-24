import { styled } from "styled-components"

const Gradient = () =>{
    return (
      <Grade/>
    )
}

export default Gradient

const Grade = styled.div`
    
    height: 5rem;
    width: 5rem;
    background: linear-gradient(
    20deg,
    hsl(340, 60%, 65%),
    hsl(${340 - 305}, 64%, 60%)
  );
`