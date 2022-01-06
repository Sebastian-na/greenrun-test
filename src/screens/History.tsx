import { useEffect, useState } from "react"
import { getUserSports } from "../services/db"
import { Sport } from "./Home"
import { useAuth } from "../contexts/AuthContext"
import styled, { useTheme } from "styled-components"
import HeartIcon from "../assets/icons/HeartIcon"
import ExIcon from "../assets/icons/ExIcon"

const SportItem = styled.li`
  position: relative;
  list-style: none;
  background-color: ${({ theme }) => theme.bgColorOnBgColor};
  height: 100px;
  border-radius: 14px;
`

const SportImage = styled.img`
  position: absolute;
  border-radius: 14px;
  height: 100px;
  mix-blend-mode: multiply;
  backdrop-filter: brightness(
    ${({ theme }) => (theme.theme == "dark" ? 1.75 : 0.35)}
  );
`

const SportList = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;
  padding-bottom: 100px;
  border-radius: 16px;
  max-width: 500px;
  margin: 0 auto;
`

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 50px;
`

const Headline = styled.h2`
  font-size: 34px;
  color: ${({ theme }) => theme.darkTextOnBg};
`

const Paragraph = styled.p`
  font-size: 18px;
  margin: 20px 0;
`

const SportName = styled.h3`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);

  font-size: 24px;
  color: ${({ theme }) => theme.white};
`

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`

const History = () => {
  const [userSports, setUserSports] = useState<Sport[]>([])
  const { user } = useAuth()
  const theme = useTheme()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const date = new Date()

  useEffect(() => {
    async function getSports() {
      const userSports = (await getUserSports(user.uid)) as Sport[]
      setUserSports(userSports)
    }
    getSports()
  }, [])
  return (
    <Container>
      <Headline>History</Headline>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Paragraph>
      <Paragraph>{`${date.getDate()} ${
        monthNames[date.getMonth()]
      }`}</Paragraph>
      <SportList>
        {userSports.map((sport) => (
          <SportItem key={sport.idSport}>
            <SportName>{sport.strSport}</SportName>
            <SportImage src={sport.strSportThumb} />
            <IconContainer>
              {sport.liked ? (
                <HeartIcon width={24} fill={theme.heartColorHistory} />
              ) : (
                <ExIcon width={24} fill={theme.xColorHistory} />
              )}
            </IconContainer>
          </SportItem>
        ))}
      </SportList>
    </Container>
  )
}

export default History
