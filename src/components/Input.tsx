import styled from "styled-components"

export const InputEl = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-top: 8px;
  color: ${({ theme }) => theme.darkTextOnBg};
  background-color: transparent;
  font-size: 18px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.bgColorOnBgColor}
      inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.darkTextOnBg} !important;
    outline: none;
  }
`

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bgColorOnBgColor};
  outline: none;
  border: none;
  border-radius: 18px;
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
