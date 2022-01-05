import styled from "styled-components"

interface ButtonProps {
  mt?: number
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
  padding: 22px 38px;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  margin-top: ${({ mt }) => `${mt}px`};
  &:hover {
    opacity: 0.9;
  }
`
