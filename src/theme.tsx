import { createGlobalStyle } from "styled-components"

export interface ThemeType {
  bgColor: string
  bgColorOnBgColor: string
  darkTextOnBg: string
  lightTextOnBg: string
  textOnBg: string
  primaryColor: string
  primaryColorVariant: string
  primaryColor2Variant: string
  primaryColor3Variant: string
  buttonBgColor: string
  menuItemBgColor: string
  menuItemColorActive: string
  menuItemColorInactive: string
  xColorHome: string
  xColorHistory: string
  radius: string
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textOnBg};
    font-family: "Epilogue", sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.darkTextOnBg};
  }
`

const lightTheme: ThemeType = {
  bgColor: "#f3f3f3",
  bgColorOnBgColor: "#ffffff",
  darkTextOnBg: "fefefe",
  lightTextOnBg: "fefefe",
  textOnBg: "fefefe",
  primaryColor: "#236bfe",
  primaryColorVariant: "#0d4ed3",
  primaryColor2Variant: "#063ba8",
  primaryColor3Variant: "#195ae0",
  buttonBgColor: "#ffffff",
  menuItemBgColor: "#fbfbfb",
  menuItemColorInactive: "#ededed",
  menuItemColorActive: "#1a5be1",
  xColorHome: "#d36060",
  xColorHistory: "#ea596f",
  radius: "25px",
}

const darkTheme: ThemeType = {
  bgColor: "#181828",
  bgColorOnBgColor: "#2c2b3e",
  darkTextOnBg: "#161617",
  lightTextOnBg: "#3c3c3c",
  textOnBg: "#232232",
  primaryColor: "#236bfe",
  primaryColorVariant: "#0d4ed3",
  primaryColor2Variant: "#063ba8",
  primaryColor3Variant: "#195ae0",
  buttonBgColor: "#222243",
  menuItemBgColor: "#1f1f31",
  menuItemColorActive: "#ffffff",
  menuItemColorInactive: "#181828",
  xColorHome: "#ffffff",
  xColorHistory: "#ea596f",
  radius: "25px",
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
