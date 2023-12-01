import { useFormContext } from 'react-hook-form'
import { CardOption, ImageTop } from './styles'

type InputRadioProps = {
  img: string,
  id: string,
  name: string,
  value: string,
  required: boolean
  children: React.ReactNode
}

const InputRadio = ({ img, id, name, value, required, children }: InputRadioProps) => {
  const { register } = useFormContext();
  return (
    <CardOption>
      <input type="radio" id={id} {...register(name, { required })} value={value} hidden />
      <label htmlFor={id}>
        <ImageTop>
          <img src={img} alt="" />
        </ImageTop>
        <div>
          {children}
        </div>
      </label>
    </CardOption>
  )
}

export default InputRadio
