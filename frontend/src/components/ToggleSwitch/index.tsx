import { Container, Slider } from './styles';

const ToggleSwitch = () => {
  return (
    <Container>
      <span>Monthly</span>
      <Slider>
        <input type="checkbox" />
        <span></span>
      </Slider>
      <span>Yearly</span>
    </Container>
  )
}

export default ToggleSwitch
