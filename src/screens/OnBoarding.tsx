import styled, { useTheme } from "styled-components"
import { Button } from "../components/Button"
import messi from "../assets/images/messi.png"
import { Link } from "react-router-dom"
import { Paragraph } from "../components/Paragraph"
import { Headline } from "../components/Headline"
import { useEffect } from "react"

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
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  padding: 46px 32px;
  @media (min-width: 768px) {
    position: relative;
    border-radius: 36px;
  }
`

const OnBoarding = () => {
  const theme = useTheme()

  return (
    <Container>
      <Image src={messi} alt="messi image" />
      <WelcomeContainer>
        <Headline n={1} size={28} lh={34} color={theme.textOnBg}>
          Discover Your Best Sport With Us
        </Headline>
        <Paragraph size={18} op={0.8} mt={12} lh={26} mb={70}>
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
