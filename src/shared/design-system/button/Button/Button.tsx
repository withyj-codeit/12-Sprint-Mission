import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { ComponentProps } from 'react'

const cx = classNames.bind(styles)

interface ButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'text'
  size?: 'small' | 'medium' | 'large'
  color?: 'white' | 'gray' | 'yellow' | 'purple'
  fullWidth?: boolean
}

export const Button = ({
  variant,
  size = 'medium',
  color = 'white',
  fullWidth = false,
  type = 'button',
  children,
  ref,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      className={cx('container', variant, color, size, { fullWidth })}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  )
}
