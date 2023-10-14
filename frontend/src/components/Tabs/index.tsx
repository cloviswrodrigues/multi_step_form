import { Container, TabItem, Rounded, Step, SubTitle, Title } from "./styles"

import { typeTab } from "../../types/tab"

type TabProps = {
  tabs: typeTab[],
}

const Tab = ({ tabs }: TabProps) => {
  return (
    <Container>
      {tabs.map((item, index) => (
        <TabItem key={item.title}>
          <Rounded active={item.active}>{index + 1}</Rounded>
          <Step>
            <Title>STEP {index + 1}</Title>
            <SubTitle>{item.title}</SubTitle>
          </Step>
        </TabItem>
      ))}
    </Container>
  )
}

export default Tab
