import classNames from 'classnames/bind'
import styles from './GeneralLayout.module.scss'
import { ReactElement } from 'react'

const cx = classNames.bind(styles)

type GeneralLayoutProps = {
  children: ReactElement
}

export const GeneralLayout = ({
  children
}: GeneralLayoutProps) => {
  return (
    <div className={cx('container')}>
      {children}
    </div>
  )
}
