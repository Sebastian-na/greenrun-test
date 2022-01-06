import React, { useContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyles } from "../theme"

const ThemeUpdateContext = React.createContext<() => void>(() => {})

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches.valueOf()
  )

  function toggleTheme() {
    setDarkTheme((prev) => !prev)
  }

  return (
    <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <GlobalStyles />
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  )
}
