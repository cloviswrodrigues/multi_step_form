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
        <label htmlFor={props.name}>{label}</label>
        {hasError && <span>{errorMessage}</span>}
      </div>
      <InputContainer id={props.name} {...props} hasError={hasError} />
    </Container>
  )
}

export default Input
