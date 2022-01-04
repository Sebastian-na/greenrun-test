import styled from "styled-components"
import { Button } from "../components/Button"
import messi from "../assets/images/messi.png"
import { Link } from "react-router-dom"

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  position: relative;
  z-index: -1;
`

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 25px;
  }
`

const WelcomeContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgColorOnBgColor};
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};
  padding: 46px 32px;
  @media (min-width: 768px) {
    position: relative;
    border-radius: ${({ theme }) => theme.radius};
  }
`

const Headline = styled.h1`
  color: ${({ theme }) => theme.textOnBg};
  font-size: 28px;
  line-height: 34px;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textOnBg};
  font-size: 18px;
  opacity: 0.8;
  margin-top: 12px;
  line-height: 26px;
  margin-bottom: 70px;
`

const OnBoarding = () => {
  return (
    <Container>
      <Image src={messi} alt="messi image" />
      <WelcomeContainer>
        <Headline>Discover Your Best Sport With Us</Headline>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </WelcomeContainer>
    </Container>
  )
}

export default OnBoarding
