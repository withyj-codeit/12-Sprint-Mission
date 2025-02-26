import { TextFieldController } from "@/shared/feature-form-field"
import { useWatch } from "react-hook-form"

export const TestComponent = ({ control }) => {
  const test1 = useWatch({ control: control, name: 'test1' })
  console.log(test1)
  return (
    <TextFieldController
      name="test1"
      label="test1"
      placeholder="test1"
    />
  )
}
