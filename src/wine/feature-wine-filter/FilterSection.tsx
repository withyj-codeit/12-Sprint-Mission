import classNames from 'classnames/bind'
import styles from './FilterSection.module.scss'
import { ReactElement } from 'react'

const cx = classNames.bind(styles)

type FilterSectionProps = {
  label: string
  children: ReactElement | ReactElement[]
}

export const FilterSection = ({
  label,
  children
}: FilterSectionProps) => {
  return (
    <div className={cx('container')}>
      <label>{label}</label>
      {children}
    </div>
  )
}
