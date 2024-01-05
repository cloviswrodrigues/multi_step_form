import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';

import { FormValues, Plan } from '../../types/index'
import GlobalStyle from '../../assets/styles/global'
import theme from '../../assets/styles/theme';
import Tabs from '../Tabs';
import ButtonBack from '../ButtonBack';
import Button from '../Button';
import FormYourInfo from '../Forms/FormYourInfo';
import SelectPlan from '../Forms/SelectPlan';
import PickAddOns from '../Forms/PickAddOns';
import Summary from '../Summary';
//import ThankYou from '../ThankYou';

import { Main, Container, Pagination, Form, Navigation } from './styles'



function App() {
  const [step, setStep] = useState(1);
  const methods = useForm<FormValues>({
    defaultValues: {
      plan: Plan.Arcade,
      periodOption: 'monthly',
      pickAddOns: [
        {
          name: 'addonsOnlineService',
          title: 'Online service',
          description: 'Access to multiplayer games',
          monthly: 1,
          yearly: 10,
          checked: false,
        },
        {
          name: 'addonsLargerStorage',
          title: 'Larger storage',
          description: 'Extra 1TB of cloud save',
          monthly: 2,
          yearly: 20,
          checked: false,
        },
        {
          name: 'addonsCustomizableProfile',
          title: 'Customizable profile',
          description: 'Custom theme on your profile',
          monthly: 2,
          yearly: 20,
          checked: false,
        }
      ]
    }
  })
  const steps = [
    { name: 'YOUR INFO', component: <FormYourInfo /> },
    { name: 'SELECT PLAN', component: <SelectPlan /> },
    { name: 'ADD-ONS', component: <PickAddOns /> },
    { name: 'SUMMARY', component: <Summary /> },
  ]

  function previous() {
    setStep(prevState => {
      const step = prevState - 1;
      if (step <= 0) {
        return prevState;
      }
      return prevState - 1;
    });
  }

  async function next() {
    const validStep = await validateStep();
    console.log('validStep: ', validStep)
    if (!validStep) return

    setStep(prevState => {
      const step = prevState + 1;
      if (step > steps.length) {
        return prevState;
      }
      return prevState + 1;
    });
  }

  async function validateStep() {
    const isValid = await methods.trigger();
    console.log('isValid ===> ', isValid)
    if (isValid) {
      console.log('formulario valido');
      return true
    }
    console.log('formulario invalido');
    return false
  }

  async function onSubmit(data: FormValues) {
    console.log('data==========>', data)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Container>
          <Pagination>
            <Tabs names={steps.map(step => step.name)} indexTabActive={step - 1} />
          </Pagination>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              {steps[step - 1].component}
              <Navigation>
                <ButtonBack visible={step > 1 ? "true" : "false"} onClick={previous}>Go Back</ButtonBack>
                {step == steps.length ? <Button type='submit' onClick={next}>Confirm</Button>
                  : <Button type='button' onClick={next}>Next Step</Button>}
              </Navigation>
            </Form>
          </FormProvider>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
