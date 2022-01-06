import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components"
import HeartIcon from "../assets/icons/HeartIcon"
import ExIcon from "../assets/icons/ExIcon"
import ThemeToggleButton from "../components/ThemeToggleButton"
import { useTheme } from "styled-components"
import { getAndFilterSports, addSport } from "../services/db"
import Loading from "../components/Loading"
import { Sport } from "../interfaces"
import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
} from "@react-spring/web"

const SportImage = styled.img`
  width: 100%;
`

const SportName = styled.h2`
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 21px 26px;
  font-size: 34px;
  color: ${({ theme }) => theme.white};
`

const GridContainer = styled(animated.div)`
  position: absolute;
  left: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 500px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }
`

const Controls = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 200px;
`

const HeartIconContainer = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(125.02deg, ${theme.primaryColor} -17.11%, ${theme.primaryColorVariant} 98.58%)`};
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const ExIconContainer = styled.div`
  background: ${({ theme }) => theme.buttonBgColor};
  padding: 20px;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const CenteredContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SportsContainer = styled(animated.div)`
  position: relative;
`

const Home = () => {
  const [sports, setSports] = useState<Sport[]>([])
  const [index, setIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  const { user } = useAuth()
  const theme = useTheme()

  const addSportAndRemoveFromScreen = async (liked: boolean) => {
    setLiked(liked)
    addSport(sports[index], liked, user.uid)
    setIndex((prev) => prev + 1)
  }
  useEffect(() => {
    document.title = "Home"
    async function getSports() {
      setIsLoading(true)
      const sports = (await getAndFilterSports(user.uid)) as Sport[]
      setSports(sports)
      setIsLoading(false)
    }

    // let initialX: number | null = null
    // let movingX: number | null = null

    // function startTouch(e: TouchEvent) {
    //   initialX = e.touches[0].clientX
    // }

    // function moveTouch(e: TouchEvent) {
    //   movingX = e.touches[0].clientX
    // }

    // function endTouch(e: TouchEvent) {
    //   if (initialX === null || movingX === null) return
    //   if (initialX + 100 < movingX) {
    //     //swipe right
    //     console.log("swipe right")
    //     console.log("index", index)
    //     addSportAndRemoveFromScreen(true)
    //   } else if (initialX - 100 > movingX) {
    //     console.log("swipe left")
    //     //swipe left
    //     addSportAndRemoveFromScreen(false)
    //   }
    // }

    // window.addEventListener("touchstart", startTouch, false)
    // window.addEventListener("touchmove", moveTouch, false)
    // window.addEventListener("touchend", endTouch, false)

    getSports()
    //
    // return () => {
    //   window.removeEventListener("touchstart", startTouch, false)
    //   window.removeEventListener("touchmove", moveTouch, false)
    //   window.removeEventListener("touchend", endTouch, false)
    // }
  }, [])

  const [fadeSlideIn] = useSpring(() => ({
    transform: "translateY(0)",
    opacity: 1,
    from: {
      transform: "translateY(-100%)",
      opacity: 0,
    },
    config: {
      duration: 1000,
    },
    delay: 500,
  }))

  const transRef = useSpringRef()

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0,
      transform: "translate3d(-50%,0,0) rotate(0deg) scale(0.9)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(-50%,0,0) rotate(0deg) scale(1)",
      position: "absolute",
    },
    leave: {
      opacity: 0,
      transform: liked
        ? "translate3d(100%,0,0) rotate(45deg) scale(0.8)"
        : "translate3d(-200%,0,0) rotate(-45deg) scale(0.8)",
      position: "absolute",
    },
    config: {
      duration: 150,
    },
  })

  useEffect(() => {
    console.log(index)
    transRef.start()
  }, [index])

  if (isLoading) {
    return <Loading size={300} />
  }

  return sports?.length > 0 && index < sports?.length ? (
    <>
      <SportsContainer style={fadeSlideIn}>
        {transitions(
          ({ opacity, transform }, index) =>
            sports[index] && (
              <>
                <GridContainer
                  style={{
                    opacity: opacity as any,
                    transform: transform as any,
                  }}
                >
                  <ThemeToggleButton />
                  {[...Array(10)].map((_, i) => (
                    <SportImage src={sports[index].strSportThumb} key={i} />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <SportImage
                      src={sports[index].strSportThumb}
                      style={{
                        borderBottomRightRadius: "35px",
                        borderBottomLeftRadius: "35px",
                      }}
                      key={i}
                    />
                  ))}

                  <SportName>{sports[index].strSport}</SportName>
                  <Controls>
                    <ExIconContainer
                      onClick={() => addSportAndRemoveFromScreen(false)}
                    >
                      <ExIcon fill={theme.xColorHome} />
                    </ExIconContainer>
                    <HeartIconContainer
                      onClick={() => addSportAndRemoveFromScreen(true)}
                    >
                      <HeartIcon />
                    </HeartIconContainer>
                  </Controls>
                </GridContainer>
              </>
            )
        )}
      </SportsContainer>
    </>
  ) : (
    <CenteredContainer>No available sports to show</CenteredContainer>
  )
}

export default Home
