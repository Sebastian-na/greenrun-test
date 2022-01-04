import styled from "styled-components"

export const InputEl = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-top: 8px;
  color: ${({ theme }) => theme.darkTextOnBg};
  background-color: transparent;
  font-size: 18px;
`

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bgColorOnBgColor};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  padding: 16px 12px;
`

const Label = styled.label`
  color: ${({ theme }) => theme.lightTextOnBg};
  font-weight: 700;
  font-size: 14px;
  opacity: 0.6;
`

interface InputProps {
  label: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  innerRef?: React.RefObject<HTMLInputElement>
}

const Input = ({ label, type, onChange, innerRef, onEnter }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputEl
        ref={innerRef}
        onChange={onChange}
        type={type}
        onKeyUp={onEnter}
      />
    </Container>
  )
}

export default Input
