import Button from "../../Button"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { Container, Fields, RadioButtonsGroup, LabelRadio, CheckBoxGroup, Navigation } from "./styles"
import ButtonBack from "../../ButtonBack"
import InputRadio from "../../InputRadio"
import ToggleSwitch from "../../ToggleSwitch"

const SelectPlan = () => {

  return (
    <Container>
      <Title>Select your plan</Title>
      <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
      <Fields>
        <RadioButtonsGroup>
          <InputRadio img={'../../../assets/images/icon-arcade.svg'}
            id={'plan-arcade'}
            name={'plan'}
          >
            <LabelRadio>
              <p>Arcade</p>
              <span>$90/yr</span>
              <small>2 months free</small>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-advanced.svg'}
            id={'plan-advanced'}
            name={'plan'}
          >
            <LabelRadio>
              <p>Advanced</p>
              <span>$120/yr</span>
              <small>2 months free</small>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-pro.svg'}
            id={'plan-pro'}
            name={'plan'}
          >
            <LabelRadio>
              <p>Prop</p>
              <span>$150/yr</span>
              <small>2 months free</small>
            </LabelRadio>
          </InputRadio>
        </RadioButtonsGroup>
        <CheckBoxGroup>
          <ToggleSwitch />
        </CheckBoxGroup>
        <Navigation>
          <ButtonBack>Go Back</ButtonBack>
          <Button>Next Step</Button>
        </Navigation>
      </Fields>
    </Container>
  )
}

export default SelectPlan
