import { useTheme } from 'styled-components'

import { ButtonContainer } from "./styles"

type ButtonProps = React.ComponentProps<'button'>

const Button = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme();
  const color = props.type === 'submit' ? theme.colors.bluePurplish : theme.colors.blueMarine;

  return (
    <ButtonContainer style={{ backgroundColor: color }} {...props}>{children}</ButtonContainer>
  )
}

export default Button
