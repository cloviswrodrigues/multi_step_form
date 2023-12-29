import { useFormContext } from "react-hook-form"

import { Period, periodOption, pickAddOns } from "../../../types"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { Fields, DescriptionCheckBox } from "./styles"
import InputCheckBox from "../../InputCheckBox"
import { formatCurrencyPeriod } from "../../../utils"

const PickAddOns = () => {
  const { watch, setValue } = useFormContext();
  const periodOption: periodOption = watch('periodOption');
  const pickAddOns: pickAddOns[] = watch('pickAddOns');

  function onChangePickAddons(e: React.ChangeEvent<HTMLInputElement>) {
    const element = e.target;
    const checked = element.checked;
    const name = element.name;

    const newPickADdons = pickAddOns.map(item => {
      if (item.name === name) {
        return { ...item, checked: checked }
      }
      return item;
    })

    setValue('pickAddOns', newPickADdons);
  }

  return (
    <div>
      <Title>Pick add-ons</Title>
      <SubTitle>Add-ons help echance your gaming experience.</SubTitle>
      <Fields>
        {pickAddOns.map((item, index) => (
          <InputCheckBox
            key={(index + 1).toString()}
            id={(index + 1).toString()}
            name={item.name}
            onChange={onChangePickAddons}
            data-title={item.title}
            data-monthly={item[Period.Monthly]}
            data-yearly={item[Period.Yearly]}
          >
            <DescriptionCheckBox>
              <div>
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
              <small>{formatCurrencyPeriod(item[periodOption], periodOption)}</small>
            </DescriptionCheckBox>
          </InputCheckBox>
        ))}
      </Fields>
    </div>
  )
}

export default PickAddOns
