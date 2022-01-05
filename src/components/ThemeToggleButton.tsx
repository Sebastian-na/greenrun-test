import React from "react"
import { useThemeUpdate } from "../contexts/ThemeContext"
import styled from "styled-components"

const StyledButton = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  width: 60px;
  height: 60px;

  &:after {
    content: ${({ theme }) => (theme.theme === "dark" ? "'🌤️'" : "'🌙'")};
    font-size: 25px;
    background: ${({ theme }) => theme.buttonBgColor};
    padding: 8px;
    border-radius: 18px;
  }
`

const ThemeToggleButton = () => {
  const toggleTheme = useThemeUpdate()

  return <StyledButton onClick={toggleTheme}></StyledButton>
}

export default ThemeToggleButton
