import Input from "../../Input"
import Title from "../../Title"
import SubTitle from "../../Subtitle"
import { InputGroup } from "./styles"
import { useFormContext } from "react-hook-form"

const FormYourInfo = () => {
  const { register, formState: { errors } } = useFormContext()
  console.log('errors.name: ', errors)
  return (
    <div>
      <Title>Personal Info</Title>
      <SubTitle>Please provide your name, email address, and phone number.</SubTitle>
      <InputGroup>
        <Input
          {...register("name")}
          label="Name"
          placeholder="e.g. Stephen King"
          hasError={errors.name !== undefined}
          errorMessage="This field is required"
        />
        <Input
          {...register("email")}
          label="Email Adress"
          placeholder="e.g. stephenking@lorem.com"
          hasError={errors.email !== undefined}
          errorMessage="This field is required"
        />
        <Input
          {...register("phone", { required: true })}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          hasError={errors.phone !== undefined}
          errorMessage="This field is required"
        />
      </InputGroup>
    </div>
  )
}

export default FormYourInfo
