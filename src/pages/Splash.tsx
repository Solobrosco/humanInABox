import { styled } from "styled-components";
import background from '../assets/Yosemite_2.jpg'

import Quote from "../components/Quote";

const Splash = () => {
  let greeting = "Hello World!"
  let author = "Nikko Solon"
  return(
    <>
    <FullScreenImage>
        <Image src={background} alt="Yosemite View" />
        <TextOverlay>
          <Quote quote={greeting} author={author}></Quote>
        </TextOverlay>
    </FullScreenImage>
    <Container>
      <h2>Contact</h2>
    </Container>
    {/* // background section
    // title quote
    // contacts */}
    </>
  )
}

export default Splash

const QuoteComponent = styled.div`
  
`

const TextOverlay = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  padding: 1rem;
  border-radius: 50%;
`

const Container = styled.div`
  text-align: center;
`

const FullScreenImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;