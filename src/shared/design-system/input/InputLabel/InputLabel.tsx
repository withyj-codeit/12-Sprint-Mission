import classNames from 'classnames/bind'
import styles from './InputLabel.module.scss'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type LabelProps = {
  children: ReactNode
  disabled?: boolean
  error?: boolean
  valid?: boolean
}

export const InputLabel = ({
  children,
  disabled = false,
  error = false,
  valid = false
}: LabelProps) => {
  return (
    <div className={cx('container', { disabled, error, valid })}>
      {children}
    </div>
  )
}
