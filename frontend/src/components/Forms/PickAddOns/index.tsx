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
        <InputCheckBox id="1" name="addons-1">
          <DescriptionCheckBox>
            <div>
              <p>Online Service</p>
              <span>Access to multiplayer games</span>
            </div>
            <small>+$1/mo</small>
          </DescriptionCheckBox>
        </InputCheckBox>
        <InputCheckBox id="2" name="addons-2">
          <DescriptionCheckBox>
            <div>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
            <small>+$2/mo</small>
          </DescriptionCheckBox>
        </InputCheckBox>
        <InputCheckBox id="3" name="addons-3">
          <DescriptionCheckBox>
            <div>
              <p>Customizable profile</p>
              <span>Custom theme on your profile</span>
            </div>
            <small>+$2/mo</small>
          </DescriptionCheckBox>
        </InputCheckBox>
      </Fields>
    </div>
  )
}

export default PickAddOns
