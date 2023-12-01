import { Container, Label } from './styles';
import { useFormContext } from 'react-hook-form';

type ToggleProps = {
  name: string,
}

const ToggleSwitch = ({ name }: ToggleProps) => {
  const { register } = useFormContext();

  return (
    <Container>
      <span>Monthly</span>
      <Label>
        <input type="checkbox" {...register(name)} />
        <span></span>
      </Label>
      <span>Yearly</span>
    </Container>
  )
}

export default ToggleSwitch
