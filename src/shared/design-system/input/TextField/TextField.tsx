import classNames from 'classnames/bind'
import styles from './TextField.module.scss'
import { InputLabel } from '@/shared/design-system/input/InputLabel'
import { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, KeyboardEventHandler, ReactNode, Ref } from 'react'
import { HelperText } from '@/shared/design-system/input/HelperText/HelperText'

const cx = classNames.bind(styles)

export type TextFieldProps = {
  id?: string
  value: string
  helperText?: ReactNode
  disabled?: boolean
  error?: boolean
  valid?: boolean
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  label?: string
  placeholder?: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  ref?: Ref<HTMLInputElement>
}

export const TextField = ({
  id,
  value,
  helperText,
  disabled = false,
  error = false,
  valid = false,
  type = 'text',
  label,
  placeholder,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  onKeyDown,
  ref
}: TextFieldProps) => {
  const inputProps = {
    value,
    placeholder,
    disabled,
    type,
    ref,
    onBlur,
    onChange,
    onFocus,
    onKeyPress,
    onKeyDown,
  }

  return (
    <div className={cx('container')}>
      <label id={id} className={cx('label')}>
        {label && (
          <InputLabel
            disabled={disabled}
            error={error}
            valid={valid}
          >
            {label}
          </InputLabel>
        )}
        <input
          className={cx('input', { disabled, error, valid })}
          {...inputProps}
        />
      </label>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </div>
  )
}
