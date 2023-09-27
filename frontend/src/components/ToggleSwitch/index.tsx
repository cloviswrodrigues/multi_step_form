import { Container, Label } from './styles';

const ToggleSwitch = () => {
  return (
    <Container>
      <span>Monthly</span>
      <Label>
        <input type="checkbox" />
        <span></span>
      </Label>
      <span>Yearly</span>
    </Container>
  )
}

export default ToggleSwitch
