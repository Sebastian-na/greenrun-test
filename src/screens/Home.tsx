import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components"
import HeartIcon from "../assets/icons/HeartIcon"
import ExIcon from "../assets/icons/ExIcon"
import ThemeToggleButton from "../components/ThemeToggleButton"
import { useTheme } from "styled-components"
import { getAndFilterSports, addSport } from "../services/db"

export interface Sport {
  idSport: string
  strSport: string
  strSportThumb: string
}

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

const GridContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 500px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  overflow: hidden;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 150px;
  margin-top: 15px;
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
`

const Home = () => {
  const [sports, setSports] = useState<Sport[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useAuth()
  const theme = useTheme()

  useEffect(() => {
    document.title = "Home"
    async function getSports() {
      setIsLoading(true)
      const sports = (await getAndFilterSports(user.uid)) as Sport[]
      setSports(sports)
      setIsLoading(false)
    }
    getSports()
  }, [])

  const addSportAndRemoveFromScreen = async (liked: boolean) => {
    addSport(sports[0], liked, user.uid)
    setSports(sports.slice(1))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return sports?.length > 0 ? (
    <>
      <GridContainer>
        <ThemeToggleButton />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportImage src={sports[0].strSportThumb} />
        <SportName>{sports[0].strSport}</SportName>
      </GridContainer>
      <Controls>
        <ExIconContainer onClick={() => addSportAndRemoveFromScreen(false)}>
          <ExIcon fill={theme.xColorHome} />
        </ExIconContainer>
        <HeartIconContainer onClick={() => addSportAndRemoveFromScreen(true)}>
          <HeartIcon />
        </HeartIconContainer>
      </Controls>
    </>
  ) : (
    <div>No available sports to show</div>
  )
}

export default Home
