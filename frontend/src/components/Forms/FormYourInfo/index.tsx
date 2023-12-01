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
        <Input
          label="Name"
          name="name"
          required={true}
          placeholder="e.g. Stephen King"
          errorMessage="This field is required"
        />
        <Input
          label="Email Adress"
          name="email"
          required={true}
          placeholder="e.g. stephenking@lorem.com"
          errorMessage="This field is required"
        />
        <Input
          label="Phone Number"
          name="phone"
          required={true}
          placeholder="e.g. +1 234 567 890"
          errorMessage="This field is required"
        />
      </InputGroup>
    </div>
  )
}

export default FormYourInfo
