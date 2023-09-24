import { ButtonContainer } from "./styles"

type ButtonBackProps = React.ComponentProps<'button'>

const ButtonBack = ({ children, ...props }: ButtonBackProps) => {
  return (
    <ButtonContainer {...props}>{children}</ButtonContainer>
  )
}

export default ButtonBack
