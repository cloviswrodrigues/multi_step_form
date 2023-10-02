import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global'
import theme from '../../assets/styles/theme';
import VerticalTabs from '../VerticalTabs';
import ButtonBack from '../ButtonBack';
import Button from '../Button';
import FormYourInfo from '../Forms/FormYourInfo';
import SelectPlan from '../Forms/SelectPlan';
import { typeTab } from '../../types/tab';

import { Main, Container, Content, Pagination, Navigation } from './styles'
import PickAddOns from '../Forms/PickAddOns';

const tabsAvailable = [
  { title: 'YOUR INFO', active: false },
  { title: 'SELECT PLAN', active: false },
  { title: 'ADD-ONS', active: false },
  { title: 'SUMMARY', active: false },
]

function App() {
  const tabs: typeTab[] = tabsAvailable;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Container>
          <Pagination>
            <VerticalTabs tabs={tabs} />
          </Pagination>
          <Content>
            {/* <FormYourInfo /> */}
            {/* <SelectPlan /> */}
            <PickAddOns />
          </Content>
          <Navigation>
            <ButtonBack>Go Back</ButtonBack>
            <Button>Next Step</Button>
          </Navigation>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
