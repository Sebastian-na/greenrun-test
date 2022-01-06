import styled from "styled-components"

type ParagraphProps = {
  center?: boolean
  size?: number
  mt?: number
  mb?: number
  mr?: number
  ml?: number
  op?: number
  lh?: number
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ theme }) => theme.textOnBg};
  font-size: ${({ size }) => (size ? size : 18)}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  opacity: ${({ op }) => op};
  line-height: ${({ lh }) => `${lh}px`};
`
