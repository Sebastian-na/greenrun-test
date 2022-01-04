import styled from "styled-components"
import { Button } from "../components/Button"
import Input from "../components/Input"

const Headline = styled.h1`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: 42px;
  text-align: center;
`

type ParagraphProps = {
  center?: boolean
  size?: number
}

const Paragraph = styled.p<ParagraphProps>`
  color: ${({ theme }) => theme.textOnBg};
  font-size: ${({ size }) => (size ? size : 18)}px;
  opacity: 0.8;
  margin-top: 12px;
  line-height: 26px;
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Container = styled.div`
  max-width: 500px;
  min-width: 320px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

const Login = () => {
  return (
    <Container>
      <Headline>Welcome</Headline>
      <Paragraph center>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragraph>
      <InputsContainer>
        <Input label="User" />
        <Input label="Password" />
      </InputsContainer>

      <Paragraph size={16}>Forgot your password?</Paragraph>
      <Button mt={22}>Login</Button>
    </Container>
  )
}

export default Login
