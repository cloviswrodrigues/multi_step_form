import Button from "../Button"
import Input from "../Input"
import { Title, Paragraph, InputGroup } from "./styles"

const FormYourInfo = () => {
  return (
    <div>
      <Title>Personal Info</Title>
      <Paragraph>Please provide your name, email address, and phone number.</Paragraph>
      <InputGroup>
        <Input label="Name" />
        <Input label="Email Adress" />
        <Input label="Phone Number" />
        <Button>Next Step</Button>
      </InputGroup>
    </div>
  )
}

export default FormYourInfo
