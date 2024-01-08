import { useMemo } from "react";

import { useFormContext } from "react-hook-form"
import { Period, pickAddOns } from '../../types/index';

import Title from "../Title"
import SubTitle from "../Subtitle"
import { CheckList, PlanCheck, CheckServices, Total } from "./styles"
import { capitalizeFirstLetter, formatCurrencyPeriod } from '../../utils'


const Summary = () => {
  const { watch, setValue } = useFormContext();
  const [plan,
    planValue,
    pickAddOns] = watch(['plan',
      'planValue',
      'pickAddOns']);
  const periodOption: Period = watch('periodOption');

  const changedPeriod = () => {
    if (periodOption === Period.Yearly) {
      setValue('togglePeriod', false)
      setValue('periodOption', Period.Monthly)
    } else {
      setValue('togglePeriod', true)
      setValue('periodOption', Period.Yearly)
    }
  }

  const total = useMemo(() => {
    const totalPickAddOns = pickAddOns.reduce((acc: number, item: pickAddOns) => {
      if (item.checked) return acc + item[periodOption]
      return acc;
    }, 0);
    const calculateValue = planValue[periodOption] + totalPickAddOns

    return formatCurrencyPeriod(calculateValue, periodOption)
  }, [planValue, periodOption])
  return (
    <div>
      <Title>Finishing up</Title>
      <SubTitle>Double-check everything looks OK before confirming.</SubTitle>
      <CheckList>
        <PlanCheck>
          <div>
            <p>{capitalizeFirstLetter(plan)} ({capitalizeFirstLetter(periodOption)})</p>
            <button type='button' onClick={changedPeriod}>Change</button>
          </div>
          <span>{formatCurrencyPeriod(planValue[periodOption], periodOption)}</span>
        </PlanCheck>
        <hr />
        <CheckServices>
          {pickAddOns.map((item: pickAddOns) => {
            if (item.checked) {
              return (
                <div>
                  <p>{item.title}</p>
                  <span>{formatCurrencyPeriod(item[periodOption], periodOption)}</span>
                </div>
              )
            }
            return null
          })}
        </CheckServices>
      </CheckList>
      <Total>
        <p>Total ({periodOption === Period.Yearly ? 'per year' : 'per month'})</p>
        <span>{total}</span>
      </Total>
    </div>
  )
}

export default Summary
