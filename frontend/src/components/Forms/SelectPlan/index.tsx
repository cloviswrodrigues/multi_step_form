import Button from "../../Button"
import Input from "../../Input"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { Container, Fields, Navigation } from "./styles"
import ButtonBack from "../../ButtonBack"

const SelectPlan = () => {
  return (
    <Container>
      <Title>Select your plan</Title>
      <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
      <Fields>

        <Navigation>
          <ButtonBack>Go Back</ButtonBack>
          <Button>Next Step</Button>
        </Navigation>
      </Fields>
    </Container>
  )
}

export default SelectPlan
