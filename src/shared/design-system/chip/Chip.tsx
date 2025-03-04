import classNames from 'classnames/bind'
import styles from './Chip.module.scss'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type ChipProps = {
  children: ReactNode
  color?: 'primary' | 'white'
}

export const Chip = ({ children, color = 'white' }: ChipProps) => {
  return (
    <div className={cx('container', color)}>
      {children}
    </div>
  )
}
