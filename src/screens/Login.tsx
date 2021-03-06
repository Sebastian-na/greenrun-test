import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import Input from "../components/Input"
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth"
import { app } from "../firebase-config"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Headline } from "../components/Headline"
import { Paragraph } from "../components/Paragraph"
import { capitalizeFirstLetter } from "../utils"
import { StyledLink } from "../components/StyledLink"

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

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigate("/home")
      }
    })
  }, [])

  const location = useLocation()
  const { from } = (location.state as LocationState) || {
    from: { pathname: "/home" },
  }

  const { setUser } = useAuth()

  const handleLogin = async () => {
    try {
      const authentication = getAuth(app)
      await setPersistence(authentication, browserLocalPersistence)
      const data = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      )
      if (data.user) {
        setUser(data.user)
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

  return (
    <>
      <Container>
        <Headline n={1} size={42} center>
          Welcome
        </Headline>
        <Paragraph center lh={26} mt={12} op={0.8}>
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Paragraph size={14} op={0.8} mt={12} lh={26}>
            Forgot your password?
          </Paragraph>
          <Paragraph size={14} op={0.8} mt={12} lh={26}>
            <StyledLink to="/register">Don't have an account?</StyledLink>
          </Paragraph>
        </div>
        <Button onClick={handleLogin} mt={22}>
          Login
        </Button>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Login
