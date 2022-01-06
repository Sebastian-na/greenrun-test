import styled from "styled-components"
import { useSpring, animated } from "@react-spring/web"

type SpinnerProps = {
  size: number
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Spinner = styled(animated.div)<SpinnerProps>`
  position: relative;
  transform-origin: center;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 30px solid ${({ theme }) => theme.primaryColorVariant};
  border-top: 30px solid ${({ theme }) => theme.bgColor};
  border-left: 30px solid ${({ theme }) => theme.bgColor};
`

type LoadingProps = {
  size: number
}

const Loading = ({ size }: LoadingProps) => {
  const [styles, api] = useSpring(() => ({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
    loop: true,
  }))

  return (
    <Container>
      <Spinner size={size} style={styles}></Spinner>
    </Container>
  )
}

export default Loading
