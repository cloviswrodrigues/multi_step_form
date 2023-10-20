import { ButtonContainer } from "./styles"

type ButtonBackProps = React.ComponentProps<'button'> & {
  visible: string
}

const ButtonBack = ({ children, visible, ...props }: ButtonBackProps) => {
  return (
    <ButtonContainer visible={visible} {...props}>{children}</ButtonContainer>
  )
}

export default ButtonBack
