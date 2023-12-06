import { useFormContext } from "react-hook-form"

import { Container } from "./styles"

type InputCheckBoxProps = {
  id: string,
  name: string,
  children: React.ReactNode
}

const InputCheckBox = ({ id, name, children }: InputCheckBoxProps) => {
  const { register } = useFormContext();
  return (
    <Container>
      <input type="checkbox" hidden id={id} {...register(name)} />
      <label htmlFor={id}>
        <span></span>
        <div>{children}</div>
      </label>
    </Container>
  )
}

export default InputCheckBox
