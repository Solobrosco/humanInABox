import { styled } from "styled-components";
import background from '../assets/Yosemite_2.jpg'

function pickQuote (quotes: {}) {
  let keys = Object.keys(quotes);
  let randIndex = keys[Math.floor(Math.random() * keys.length)];
  // console.log(item);
  // return quotes[keys[randIndex]];
  return "Hello World!"
  // zen quotes api
}

const Splash = () => {
  let quote = pickQuote({})
  return(
    <>
    <FullScreenImage>
        <Image src={background} alt="Yosemite View" />
        <TextOverlay>{quote}</TextOverlay>
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

const TextOverlay = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  padding: 1rem;
  border-radius: 50%;
  text-shadow: 5px -4px 4px rgb(0, 0, 0);
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