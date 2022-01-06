import styled from "styled-components"

interface ButtonProps {
  mt?: number
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  size?: number
}

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) =>
    `linear-gradient(99deg, ${theme.primaryColor} 6.69%, ${theme.primaryColorVariant} 80.95%)`};
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  color: #fefefe;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.buttonShadow};
  outline: none;
  border: none;
  padding-bottom: ${({ pb }) => (pb ? pb : 22)}px;
  padding-top: ${({ pt }) => (pt ? pt : 22)}px;
  padding-left: ${({ pl }) => (pl ? pl : 38)}px;
  padding-right: ${({ pr }) => (pr ? pr : 38)}px;
  font-size: ${({ size }) => (size ? size : 18)}px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  margin-top: ${({ mt }) => `${mt}px`};
  &:hover {
    opacity: 0.8;
  }
`
