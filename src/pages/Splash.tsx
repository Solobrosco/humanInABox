import { styled } from "styled-components";

import background from '../assets/Yosemite_2.jpg'

import { updateTitle } from "../utils/generalFunctions";

import Quote from "../components/Quote";

const TITLE = "NAS"

const Splash = () => {
  let greeting = "Hello World!"
  let author = "Nikko Solon"
  updateTitle(TITLE)
  return(
    <Background>
      <FullScreenImage>
        <Image src={background} alt="Yosemite View" />
        <TextOverlay>
          <Quote quote={greeting} author={author}></Quote>
        </TextOverlay>
      </FullScreenImage>
      <Container>
        <h1>Nikko A. Solon</h1>
        <h2>About</h2>
        <p>A skilled and detail-oriented software engineer with experience in developing and implementing software tools with hands-on manufacturing experience. Proficient in software development and automation tools, as well as Continuous Integration and Deployment (CI/CD) methodologies.</p>
        <h2>Contact</h2>
      </Container>
      {/* // background section
      // title quote
      // contacts */}
    </Background>
  )
}

export default Splash

const Background = styled.div`
  padding: 1rem;
  margin: 1.2rem;
  margin-bottom: 0rem;
  background-color: #143314;
  border-radius: 0.6%;
  box-shadow: 2px -4px 4px rgb(21, 21, 21);
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
  padding: 3rem;
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
  background-position: top;
`;