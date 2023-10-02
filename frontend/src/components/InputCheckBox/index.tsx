import { Container } from "./styles"

type InputCheckBoxProps = {
  children: React.ReactNode
}

const InputCheckBox = ({ children }: InputCheckBoxProps) => {
  return (
    <Container>
      <input type="checkbox" hidden />
      <label htmlFor="">
        <div>{children}</div>
      </label>
    </Container>
  )
}

export default InputCheckBox
