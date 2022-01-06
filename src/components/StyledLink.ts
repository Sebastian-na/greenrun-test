import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.darkTextOnBg};
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }
`
