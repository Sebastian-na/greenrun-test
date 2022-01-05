import { useEffect, useState } from "react"
import { getAllSports } from "../api"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore"
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components"
import HeartIcon from "../assets/icons/HeartIcon"
import ExIcon from "../assets/icons/ExIcon"
import ThemeToggleButton from "../components/ThemeToggleButton"
import { useTheme } from "styled-components"

const db = getFirestore()

interface Sport {
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
`

const ExIconContainer = styled.div`
  background: ${({ theme }) => theme.buttonBgColor};
  padding: 20px;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const Home = () => {
  const [sports, setSports] = useState<Sport[]>([])

  const { user } = useAuth()
  const theme = useTheme()

  useEffect(() => {
    document.title = "Home"
    async function getAndFilterSports() {
      try {
        const allSports: Sport[] = await getAllSports()
        const userQuery = query(
          collection(db, "users"),
          where("id", "==", user.uid)
        )
        const userSnapShot = await getDocs(userQuery)
        const userDocId = userSnapShot.docs[0].id
        const userSports = await getDocs(
          collection(db, `users/${userDocId}/sports`)
        )
        const filteredSports = allSports.filter(
          (sport) =>
            !userSports.docs.some(
              (doc) => doc.data().id_sport === sport.idSport
            )
        )
        setSports(filteredSports)
      } catch (e) {
        console.log(e)
      }
    }

    getAndFilterSports()
  }, [])
  return (
    sports.length > 0 && (
      <>
        <GridContainer>
          <ThemeToggleButton />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportImage src={sports[1].strSportThumb} />
          <SportName>{sports[1].strSport}</SportName>
        </GridContainer>
        <Controls>
          <ExIconContainer>
            <ExIcon fill={theme.xColorHome} />
          </ExIconContainer>
          <HeartIconContainer>
            <HeartIcon />
          </HeartIconContainer>
        </Controls>
      </>
    )
  )
}

export default Home
