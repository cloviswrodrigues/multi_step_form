import { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global'
import theme from '../../assets/styles/theme';
import Tabs from '../Tabs';
import ButtonBack from '../ButtonBack';
import Button from '../Button';
import FormYourInfo from '../Forms/FormYourInfo';
import SelectPlan from '../Forms/SelectPlan';
import PickAddOns from '../Forms/PickAddOns';
import Summary from '../Forms/Summary';
import { typeTab } from '../../types/tab';

import { Main, Container, Content, Pagination, Navigation } from './styles'
import ThankYou from '../ThankYou';

const tabsAvailable: typeTab[] = [
  { title: 'YOUR INFO', active: false },
  { title: 'SELECT PLAN', active: false },
  { title: 'ADD-ONS', active: false },
  { title: 'SUMMARY', active: false },
]

function App() {
  const [tabs, setTabs] = useState(tabsAvailable);
  const [currentTab, setCurrentTab] = useState(1);

  function previous() {
    setCurrentTab(prevState => {
      const tab = prevState - 1;
      if (tab <= 0) {
        return prevState;
      }
      return prevState - 1;
    });
  }

  function next() {
    setCurrentTab(prevState => {
      const tab = prevState + 1;
      if (tab > tabs.length) {
        return prevState;
      }
      return prevState + 1;
    });
  }

  function updateTabNagivation(tab: number) {
    setTabs(prevState => {
      prevState.forEach(tab => tab.active = false);
      const newState: typeTab[] = prevState;
      const tabFound = prevState[tab - 1];
      if (tabFound) {
        tabFound.active = true;
        newState[tab - 1] = tabFound;
      }
      return [...newState]
    })
  }

  useEffect(() => {
    updateTabNagivation(currentTab)
  }, [currentTab])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Container>
          <Pagination>
            <Tabs tabs={tabs} />
          </Pagination>
          <Content visible={currentTab == 1 ? "true" : "false"}>
            <FormYourInfo />
          </Content>
          <Content visible={currentTab == 2 ? "true" : "false"}>
            <SelectPlan />
          </Content>
          <Content visible={currentTab == 3 ? "true" : "false"}>
            <PickAddOns />
          </Content>
          <Content visible={currentTab == 4 ? "true" : "false"}>
            <Summary />
          </Content>
          <Content visible={currentTab == 5 ? "true" : "false"}>
            <ThankYou />
          </Content>
          <Navigation>
            <ButtonBack visible={currentTab > 1 ? "true" : "false"} onClick={previous}>Go Back</ButtonBack>
            {currentTab == tabs.length ? <Button type='submit' onClick={next}>Confirm</Button>
              : <Button onClick={next}>Next Step</Button>}
          </Navigation>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
