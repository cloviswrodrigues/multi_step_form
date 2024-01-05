import { Container, Label, Option } from './styles';
import { useFormContext } from 'react-hook-form';

type ToggleProps = {
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ToggleSwitch = ({ name, onChange }: ToggleProps) => {
  const { register, watch } = useFormContext();
  const period = watch(name);

  return (
    <Container>
      <Option active={!period}>Monthly</Option>
      <Label>
        <input hidden type="checkbox" {...register(name, { onChange })} />
        <span></span>
      </Label>
      <Option active={period}>Yearly</Option>
    </Container>
  )
}

export default ToggleSwitch
