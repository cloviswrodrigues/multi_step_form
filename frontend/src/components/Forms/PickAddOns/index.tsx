import { useFormContext } from "react-hook-form"

import { periodOption } from "../../../types"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { Fields, DescriptionCheckBox } from "./styles"
import InputCheckBox from "../../InputCheckBox"

const PickAddOns = () => {
  const { watch } = useFormContext();
  const periodOption: periodOption = watch('periodOption');

  const services = [
    {
      name: 'addonsOnlineService',
      title: 'Online Service',
      description: 'Access to multiplayer games',
      monthly: '+$1/mo',
      yearly: '+$10/yr'
    },
    {
      name: 'addonsLargerStorage',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    },
    {
      name: 'addonsCustomizableProfile',
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    }
  ]

  return (
    <div>
      <Title>Pick add-ons</Title>
      <SubTitle>Add-ons help echance your gaming experience.</SubTitle>
      <Fields>
        {services.map((service, index) => (
          <InputCheckBox key={(index + 1).toString()} id={(index + 1).toString()} name={service.name}>
            <DescriptionCheckBox>
              <div>
                <p>{service.title}</p>
                <span>{service.description}</span>
              </div>
              <small>{service[periodOption]}</small>
            </DescriptionCheckBox>
          </InputCheckBox>
        ))}

      </Fields>
    </div>
  )
}

export default PickAddOns
