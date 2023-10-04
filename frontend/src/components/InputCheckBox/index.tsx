import { Container } from "./styles"

type InputCheckBoxProps = {
  id: string,
  name: string,
  children: React.ReactNode
}

const InputCheckBox = ({ id, name, children }: InputCheckBoxProps) => {
  return (
    <Container>
      <input type="checkbox" hidden id={id} name={name} />
      <label htmlFor={id}>
        <span></span>
        <div>{children}</div>
      </label>
    </Container>
  )
}

export default InputCheckBox
