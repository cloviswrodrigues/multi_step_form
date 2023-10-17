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
        <Input label="Name" placeholder="e.g. Stephen King" />
        <Input label="Email Adress" placeholder="e.g. stephenking@lorem.com" />
        <Input label="Phone Number" placeholder="e.g. +1 234 567 890" />
      </InputGroup>
    </div>
  )
}

export default FormYourInfo
