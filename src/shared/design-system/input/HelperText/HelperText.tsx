import classNames from 'classnames/bind'
import styles from './HelperText.module.scss'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type HelperTextProps = {
  error?: boolean
  children: ReactNode
}

export const HelperText = ({ error = false, children }: HelperTextProps) => {
  return (
    <div className={cx('container', { error })}>
      {children}
    </div>
  )
}
