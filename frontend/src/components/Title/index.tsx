import { H1 } from './styles';

type TitleProps = React.ComponentProps<'h1'>

const Title = ({ children }: TitleProps) => {
  return (
    <H1>{children}</H1>
  )
}

export default Title
