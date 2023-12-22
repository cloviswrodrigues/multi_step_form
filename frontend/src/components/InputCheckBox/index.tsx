import { useFormContext } from "react-hook-form"

import { Container } from "./styles"

type InputCheckBoxProps = {
  id: string,
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  children: React.ReactNode,
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputCheckBox = ({ id, name, onChange, children, ...props }: InputCheckBoxProps) => {
  const { register } = useFormContext();
  return (
    <Container>
      <input type="checkbox" hidden id={id} {...register(name, { onChange })} {...props} />
      <label htmlFor={id}>
        <span></span>
        <div>{children}</div>
      </label>
    </Container>
  )
}

export default InputCheckBox
