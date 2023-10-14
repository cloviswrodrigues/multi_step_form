import Input from "../../Input"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { InputGroup } from "./styles"

const FormYourInfo = () => {
  return (
    <div>
      <Title>Personal Info</Title>
      <SubTitle>Please provide your name, email address, and phone number.</SubTitle>
      <InputGroup>
        <Input label="Name" />
        <Input label="Email Adress" />
        <Input label="Phone Number" />
      </InputGroup>
    </div>
  )
}

export default FormYourInfo
