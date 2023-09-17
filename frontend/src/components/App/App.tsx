import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global'
import theme from '../../assets/styles/theme';
import VerticalTabs from '../VerticalTabs';
import { typeTab } from '../../types/tab';

import { Main, Container, Content, Navigation } from './styles'

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
          <Navigation>
            <VerticalTabs tabs={tabs} />
          </Navigation>
          <Content>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </Content>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
