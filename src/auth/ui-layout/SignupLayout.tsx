import classNames from 'classnames/bind'
import styles from './SignupLayout.module.scss'
import { ReactElement } from 'react'

const cx = classNames.bind(styles)

type SignupLayoutProps = {
  header: ReactElement
  form: ReactElement
  bottom: ReactElement
}

export const SignupLayout = ({
  header,
  form,
  bottom
}: SignupLayoutProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('box')}>
        {header}
        <div className={cx('form')}>
          {form}
        </div>
        {bottom}
      </div>
    </div>
  )
}
