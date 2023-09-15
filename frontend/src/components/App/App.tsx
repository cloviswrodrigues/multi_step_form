import GlobalStyle from '../../assets/styles/global'
import VerticalTabs from '../VerticalTabs'
import { Main, Container, Content, Navigation } from './styles'

function App() {
  const tabs = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

  return (
    <>
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
    </>
  )
}

export default App
