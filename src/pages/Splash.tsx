import { styled } from "styled-components";
import background from '../assets/Yosemite_2.jpg'

const Splash = () => {
    return(
        <>
        <FullScreenImage>
            <Image src={background} alt="Yosemite View" />
        </FullScreenImage>
        <Container></Container>
        {/* // background section
        // title quote
        // contacts */}
        </>
    )
}

export default Splash

const Container = styled.div`
    height: 2rem;
    width: 3rem;
    background-color: red;
`

const FullScreenImage = styled.div`
  position: fixed;
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