import { H2 } from './styles';

type SubTitleProps = React.ComponentProps<'h2'>

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <H2>{children}</H2>
  )
}

export default SubTitle
