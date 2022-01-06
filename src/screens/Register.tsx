import { useRef, useState } from "react"
import { Headline } from "../components/Headline"
import { Button } from "../components/Button"
import { Paragraph } from "../components/Paragraph"
import Input from "../components/Input"
import styled from "styled-components"
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
} from "firebase/auth"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userInputRef = useRef(document.createElement("input"))
  const passwordInputRef = useRef(document.createElement("input"))

  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleEnterOnEmail = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      passwordInputRef.current.focus()
    }
  }
  const handleEnterOnPassword = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRegister()
    }
  }

  const handleRegister = async () => {
    const auth = getAuth()
    await setPersistence(auth, browserLocalPersistence)
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigate("/home")
    } catch (e: any) {
      const message = e.code.split("/")[1].split("-")
      toast.error(
        `${capitalizeFirstLetter(message[0])} ${message.slice(1).join(" ")}`
      )
    }
    const user = await createUserWithEmailAndPassword(auth, email, password)
    setUser(user)
    navigate("/home")
  }

  return (
    <>
      <Container>
        <Headline n={1} size={42} center>
          Register
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

        <Paragraph size={16} op={0.8} mt={12} lh={26}>
          Already have an account? <StyledLink to="/login">Login</StyledLink>
        </Paragraph>
        <Button onClick={handleRegister} mt={22}>
          Register
        </Button>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Register
