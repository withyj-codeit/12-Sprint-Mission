import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldPathValue,
  FieldValues,
  PathValue,
  useFormContext,
} from 'react-hook-form'
import {
  TextField,
  TextFieldProps
} from '@/shared/design-system'
import { KeyboardEvent } from 'react'

type InputTextFieldConnectProps<
  F extends FieldValues,
  N extends FieldPath<F>,
> = Omit<TextFieldProps, 'value' | 'error'> & {
  id?: string
  name: N
  defaultValue?: FieldPathValue<F, N>
  rules?: ControllerProps<F, N>['rules']
}

export const TextFieldController = <
  F extends FieldValues,
  N extends FieldPath<F>,
>({
  id,
  name,
  defaultValue,
  rules,
  ...inputProps
}: InputTextFieldConnectProps<F, N>) => {
  const { control } = useFormContext<F>()
  const inputId = id ?? name

  return (
    // Controller 대신 useController 를 사용해도 좋아요!
    <Controller
      control={control}
      name={name}
      defaultValue={(defaultValue ?? '') as PathValue<F, N>}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...inputProps}
          id={inputId}
          value={field.value?.toString() ?? ''}
          onChange={(e) => {
            const { value } = e.target
            if (inputProps.type === 'number') {
              field.onChange({ ...e, target: { ...e.target, value: Number(value) } })
            } else if (inputProps.type === 'tel') {
              field.onChange({ ...e, target: { ...e.target, value: value.replace(/[^0-9-]/g, '') } })
            } else {
              field.onChange(e)
            }
          }}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
          error={!!fieldState.error}
          helperText={(fieldState.error?.message || inputProps.helperText)}
        />
      )}
    />
  )
}
