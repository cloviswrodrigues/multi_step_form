import { Container, Rounded, Step, SubTitle, Title } from "./styles"

type TabProps = {
  index: number,
  title: string,
  active: boolean
}

const Tab = ({ index, title, active }: TabProps) => {
  return (
    <Container>
      <Rounded active={active}>{index}</Rounded>
      <Step>
        <Title>STEP {index}</Title>
        <SubTitle>{title}</SubTitle>
      </Step>
    </Container>
  )
}

export default Tab
