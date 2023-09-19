import Input from "../Input"
import { Title, Paragraph, Form } from "./styles"

const FormYourInfo = () => {
  return (
    <div>
      <Title>Personal Info</Title>
      <Paragraph>Please provide your name, email address, and phone number.</Paragraph>
      <Form>
        <Input label="Name" />
        <Input label="Email Adress" />
        <Input label="Phone Number" />
      </Form>
    </div>
  )
}

export default FormYourInfo
