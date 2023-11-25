import { Container, InputContainer } from "./styles"

type InputProps = React.ComponentProps<'input'> & {
  label: string
  hasError: boolean,
  errorMessage: string,
}

const Input = ({ label, hasError = false, errorMessage, ...props }: InputProps) => {
  return (
    <Container>
      <div>
        <label htmlFor="">{label}</label>
        {hasError && <span>{errorMessage}</span>}
      </div>
      <InputContainer type="text" {...props} hasError={hasError} />
    </Container>
  )
}

export default Input
