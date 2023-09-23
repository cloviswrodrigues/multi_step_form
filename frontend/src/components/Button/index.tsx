import { ButtonContainer } from "./styles"

type ButtonProps = React.ComponentProps<'button'>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  )
}

export default Button
