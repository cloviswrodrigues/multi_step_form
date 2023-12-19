import { Container, Label } from './styles';
import { useFormContext } from 'react-hook-form';

type ToggleProps = {
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ToggleSwitch = ({ name, onChange }: ToggleProps) => {
  const { register } = useFormContext();

  return (
    <Container>
      <span>Monthly</span>
      <Label>
        <input hidden type="checkbox" {...register(name, { onChange })} />
        <span></span>
      </Label>
      <span>Yearly</span>
    </Container>
  )
}

export default ToggleSwitch
