import styled, { useTheme } from "styled-components"
import { Button } from "../components/Button"
import messi from "../assets/images/messi.png"
import { Link } from "react-router-dom"
import { Paragraph } from "../components/Paragraph"
import { Headline } from "../components/Headline"

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  position: relative;
  z-index: -1;
`

const Container = styled.div`
  position: relative;
  max-height: 100vh;
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Link to="/login">
            <Button size={16} pb={20} pt={20} pr={30} pl={30}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size={16} pb={20} pt={20} pr={30} pl={30}>
              Sign up
            </Button>
          </Link>
        </div>
      </WelcomeContainer>
    </Container>
  )
}

export default OnBoarding
