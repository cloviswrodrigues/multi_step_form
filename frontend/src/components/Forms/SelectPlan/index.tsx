import { useFormContext } from "react-hook-form"

import { periodOption, Plan } from '../../../types';
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
import { formatCurrencyPeriod } from "../../../utils";
import { useEffect, useMemo } from "react";

const SelectPlan = () => {
  const periodOption = 'periodOption';
  const { setValue, watch } = useFormContext();
  const periodSelected: periodOption = watch(periodOption);
  const plan: Plan = watch('plan');

  const planValues = useMemo(() => (
    {
      [Plan.Arcade]: {
        monthly: 9,
        yearly: 90,
      },
      [Plan.Advanced]: {
        monthly: 12,
        yearly: 120,
      },
      [Plan.Pro]: {
        monthly: 15,
        yearly: 150
      },
    }
  ), [])

  const visibleBenefit = periodSelected === 'yearly' ? true : false;

  function onChangeTogglePeriod(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setValue(periodOption, checked ? 'yearly' : 'monthly');
  }

  function onChangePlan(e: React.ChangeEvent<HTMLInputElement>) {
    const element = e.target;
    const plan = element.value as Plan;
    setValue('planValue', planValues[plan])
  }

  useEffect(() => {
    setValue('planValue', planValues[plan])
  }, [setValue, planValues, plan])

  return (
    <Container>
      <Title>Select your plan</Title>
      <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
      <Fields>
        <RadioButtonsGroup>
          <InputRadio img={'../../../assets/images/icon-arcade.svg'}
            id={'plan-arcade'}
            name={'plan'}
            value={Plan.Arcade}
            onChange={onChangePlan}
            required={true}
          >
            <LabelRadio>
              <p>Arcade</p>
              <span>{formatCurrencyPeriod(planValues.arcade[periodSelected], periodSelected)}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-advanced.svg'}
            id={'plan-advanced'}
            name={'plan'}
            value={Plan.Advanced}
            onChange={onChangePlan}
            required={true}
          >
            <LabelRadio>
              <p>Advanced</p>
              <span>{formatCurrencyPeriod(planValues.advanced[periodSelected], periodSelected)}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
          <InputRadio img={'../../../assets/images/icon-pro.svg'}
            id={'plan-pro'}
            name={'plan'}
            value={Plan.Pro}
            onChange={onChangePlan}
            required={true}
          >
            <LabelRadio>
              <p>Pro</p>
              <span>{formatCurrencyPeriod(planValues.pro[periodSelected], periodSelected)}</span>
              <Benefits visible={visibleBenefit}>2 months free</Benefits>
            </LabelRadio>
          </InputRadio>
        </RadioButtonsGroup>
        <CheckBoxGroup>
          <ToggleSwitch name={'togglePeriod'} onChange={onChangeTogglePeriod} />
        </CheckBoxGroup>
      </Fields>
    </Container>
  )
}

export default SelectPlan
