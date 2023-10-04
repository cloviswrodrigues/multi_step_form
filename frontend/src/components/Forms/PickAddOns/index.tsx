import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { Fields, DescriptionCheckBox } from "./styles"
import InputCheckBox from "../../InputCheckBox"

const PickAddOns = () => {
  return (
    <div>
      <Title>Pick add-ons</Title>
      <SubTitle>Add-ons help echance your gaming experience.</SubTitle>
      <Fields>
        <InputCheckBox id="1" name="addons">
          <DescriptionCheckBox>
            <div>
              <p>Online Service</p>
              <span>Access to multiplayer games</span>
            </div>
            <small>+$1/mo</small>
          </DescriptionCheckBox>
        </InputCheckBox>
      </Fields>
    </div>
  )
}

export default PickAddOns
