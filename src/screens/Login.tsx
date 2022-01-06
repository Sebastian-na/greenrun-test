import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import Input from "../components/Input"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase-config"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

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
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userInputRef = useRef(document.createElement("input"))
  const passwordInputRef = useRef(document.createElement("input"))

  const navigate = useNavigate()

  interface LocationState {
    from: {
      pathname: string
    }
  }
  const location = useLocation()
  const { from } = (location.state as LocationState) || {
    from: { pathname: "/home" },
  }

  const { setUser } = useAuth()

  const handleLogin = async () => {
    try {
      const authentication = getAuth(app)
      const data = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      )
      if (data.user) {
        setUser(data.user)
        console.log(data.user)
        navigate(from.pathname, { replace: true })
      }
    } catch (e: any) {
      const message = e.code.split("/")[1].split("-")
      toast.error(
        `${capitalizeFirstLetter(message[0])} ${message.slice(1).join(" ")}`
      )
    }
  }

  const handleEnterOnEmail = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      passwordInputRef.current.focus()
    }
  }
  const handleEnterOnPassword = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin()
    }
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <Container>
        <Headline>Welcome</Headline>
        <Paragraph center>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Paragraph>
        <InputsContainer>
          <Input
            innerRef={userInputRef}
            label="User"
            onChange={(e) => setEmail(e.target.value)}
            onEnter={handleEnterOnEmail}
            type="email"
          />
          <Input
            innerRef={passwordInputRef}
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onEnter={handleEnterOnPassword}
          />
        </InputsContainer>

        <Paragraph size={16}>Forgot your password?</Paragraph>
        <Button onClick={handleLogin} mt={22}>
          Login
        </Button>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Login
