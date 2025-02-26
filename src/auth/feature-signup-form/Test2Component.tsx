import { TextFieldController } from "@/shared/feature-form-field"

export const Test2Component = ({ watch }) => {
  console.log(watch('test2'))
  return (
    <TextFieldController
      name="test2"
      label="test2"
      placeholder="test2"
    />
  )
}
