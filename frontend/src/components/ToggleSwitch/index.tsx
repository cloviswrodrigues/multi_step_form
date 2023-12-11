import { Container, Label } from './styles';
import { useFormContext } from 'react-hook-form';

type ToggleProps = {
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ToggleSwitch = ({ name, onChange }: ToggleProps) => {
  const { register, watch } = useFormContext();
  const isChecked = watch(name);

  return (
    <Container>
      <span>Monthly</span>
      <Label>
        <input type="checkbox" {...register(name, { onChange })} checked={isChecked === 'yearly'} />
        <span></span>
      </Label>
      <span>Yearly</span>
    </Container>
  )
}

export default ToggleSwitch
