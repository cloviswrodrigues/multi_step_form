import { Container, InputContainer } from "./styles"
import { useFormContext } from "react-hook-form"

type InputProps = React.ComponentProps<'input'> & {
  label: string,
  name: string,
  required: boolean,
  errorMessage: string,
}

const Input = ({ label, name, required, errorMessage, ...props }: InputProps) => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = errors[name] !== undefined;

  return (
    <Container>
      <div>
        <label htmlFor={name}>{label}</label>
        {hasError && <span>{errorMessage}</span>}
      </div>
      <InputContainer
        id={name}
        {...register(name, { required })}
        hasError={hasError}
        {...props} />
    </Container>
  )
}

export default Input
