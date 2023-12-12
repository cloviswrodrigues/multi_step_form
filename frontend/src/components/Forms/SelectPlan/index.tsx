import { useFormContext } from "react-hook-form"

import { periodOption } from '../../../types';
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import {
  Container,
  Fields,
  RadioButtonsGroup,
  LabelRadio,
  Benefits,
  CheckBoxGroup
} from "./styles"
import InputRadio from "../../InputRadio"
import ToggleSwitch from "../../ToggleSwitch"

const SelectPlan = () => {
  const periodOption = 'periodOption';
  const { setValue, watch } = useFormContext();
  const periodSelected: periodOption = watch(periodOption);

  const plan = {
    arcade: 'arcade',
    advanced: 'advanced',
    pro: 'pro'
  }

  const planValues = {
    [plan.arcade]: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    [plan.advanced]: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    [plan.pro]: {
      monthly: '$15/mo',
      yearly: '$150/yr'
    },
  }

  const visibleBenefit = periodSelected === 'yearly' ? true : false;

  function onChangeTogglePeriod(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setValue(periodOption, checked ? 'yearly' : 'monthly');
  }

  return (
    <Container>
      <Title>Select your plan</Title>
      <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
      <Fields>
        <RadioButtonsGroup>
          <InputRadio img={'../../../assets/images/icon-arcade.svg'}
            id={'plan-arcade'}
            name={'plan'}
            value={plan.arcade}
            required={true}
          >
            <LabelRadio>
              <p>Arcade</p>
              <span>{planValues.arcade[periodSelected]}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-advanced.svg'}
            id={'plan-advanced'}
            name={'plan'}
            value={plan.advanced}
            required={true}
          >
            <LabelRadio>
              <p>Advanced</p>
              <span>{planValues.advanced[periodSelected]}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-pro.svg'}
            id={'plan-pro'}
            name={'plan'}
            value={plan.pro}
            required={true}
          >
            <LabelRadio>
              <p>Pro</p>
              <span>{planValues.pro[periodSelected]}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
        </RadioButtonsGroup>
        <CheckBoxGroup>
          <ToggleSwitch name={periodOption} onChange={onChangeTogglePeriod} />
        </CheckBoxGroup>
      </Fields>
    </Container>
  )
}

export default SelectPlan
