import { Container, TabItem, Rounded, Step, SubTitle, Title } from "./styles"

type TabProps = {
  names: string[],
  indexTabActive: number
}

const Tab = ({ names, indexTabActive }: TabProps) => {
  if (!names) return null
  return (
    <Container>
      {names.map((name, index) => (
        <TabItem key={name}>
          <Rounded active={indexTabActive === index}>{index + 1}</Rounded>
          <Step>
            <Title>STEP {index + 1}</Title>
            <SubTitle>{name}</SubTitle>
          </Step>
        </TabItem>
      ))}
    </Container>
  )
}

export default Tab
