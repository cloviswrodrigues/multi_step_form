import { Container } from "./styles"

type InputProps = React.ComponentProps<'input'> & {
  label: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      <input type="text" {...props} />
    </Container>
  )
}

export default Input
