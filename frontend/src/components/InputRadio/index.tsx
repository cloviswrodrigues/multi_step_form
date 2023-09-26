import { CardOption, ImageTop } from './styles'

type InputRadioProps = {
  img: string,
  id: string,
  name: string,
  children: React.ReactNode
}

const InputRadio = ({ img, id, name, children }: InputRadioProps) => {
  return (
    <CardOption>
      <input type="radio" name={name} id={id} hidden />
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
