import React from "react"
import styled from "styled-components"

interface StyledHeadlineProps {
  color?: string
  size?: number
  lh?: number
  center?: boolean
}

interface HeadlineProps extends StyledHeadlineProps {
  n: number
  children: React.ReactNode
}

const Headline1 = styled.h1<StyledHeadlineProps>`
  color: ${({ theme, color }) => (color ? color : theme.darkTextOnBg)};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Headline2 = styled.h2<StyledHeadlineProps>`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Headline3 = styled.h3<StyledHeadlineProps>`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Headline4 = styled.h4<StyledHeadlineProps>`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Headline5 = styled.h5<StyledHeadlineProps>`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const Headline6 = styled.h6<StyledHeadlineProps>`
  color: ${({ theme }) => theme.darkTextOnBg};
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  line-height: ${({ lh }) => (lh ? `${lh}px` : "36px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`

export const Headline = ({
  n,
  children,
  color,
  size,
  lh,
  center,
}: HeadlineProps) => {
  if (n === 1) {
    return (
      <Headline1 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline1>
    )
  } else if (n === 2) {
    return (
      <Headline2 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline2>
    )
  } else if (n === 3) {
    return (
      <Headline3 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline3>
    )
  } else if (n === 4) {
    return (
      <Headline4 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline4>
    )
  } else if (n === 5) {
    return (
      <Headline5 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline5>
    )
  } else {
    return (
      <Headline6 color={color} size={size} lh={lh} center={center}>
        {children}
      </Headline6>
    )
  }
}

export default Headline
