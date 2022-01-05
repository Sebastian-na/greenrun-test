import { Link, useLocation } from "react-router-dom"
import { SyntheticEvent, useState } from "react"
import styled from "styled-components"
import HomeIcon from "./HomeIcon"
import HistoryIcon from "./HistoryIcon"
import NotesIcon from "./NotesIcon"
import defaultUser from "../assets/images/default_user.png"
import { useAuth } from "../contexts/AuthContext"

const NavMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px;
  bottom: 0;
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
`

const NavMenu = styled.nav`
  height: 60px;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.bgColorOnBgColor};
  border-radius: 18px;
  width: 100%;
`

const NavMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

type NavItemProps = {
  active?: boolean
}

const NavItem = styled.li<NavItemProps>`
  list-style: none;
  padding: 15px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${({ theme, active }) =>
    active ? theme.menuItemBgColor : "transparent"};
  & > a > svg {
    pointer-events: none;
  }
  & > a svg > path {
    fill: ${({ theme, active }) =>
      active ? theme.menuItemColorActive : theme.menuItemColorInactive};
    pointer-events: none;
  }
`

const UserImage = styled.img`
  width: 32px;
  pointer-events: none;
`

const Nav = () => {
  const location = useLocation()
  const { user } = useAuth()
  const [homeActive, setHomeActive] = useState(location.pathname === "/home")
  const [historyActive, setHistoryActive] = useState(
    location.pathname === "/history"
  )
  const [notesActive, setNotesActive] = useState(location.pathname === "/notes")

  const handleHomeClick = (e: SyntheticEvent) => {
    setHomeActive(true)
    setHistoryActive(false)
    setNotesActive(false)
  }

  const handleHistoryClick = (e: SyntheticEvent) => {
    setHomeActive(false)
    setHistoryActive(true)
    setNotesActive(false)
  }

  const handleNotesClick = (e: SyntheticEvent) => {
    setHomeActive(false)
    setHistoryActive(false)
    setNotesActive(true)
  }
  return (
    user && (
      <NavMenuContainer>
        <NavMenu>
          <NavMenuList>
            <NavItem active={homeActive} onClick={handleHomeClick}>
              <Link to="/home">
                <HomeIcon />
              </Link>
            </NavItem>
            <NavItem active={historyActive} onClick={handleHistoryClick}>
              <Link to="/history">
                <HistoryIcon />
              </Link>
            </NavItem>
            <NavItem active={notesActive} onClick={handleNotesClick}>
              <Link to="/notes">
                <NotesIcon />
              </Link>
            </NavItem>
            <NavItem>
              <UserImage src={defaultUser} alt="user pic" />
            </NavItem>
          </NavMenuList>
        </NavMenu>
      </NavMenuContainer>
    )
  )
}

export default Nav
