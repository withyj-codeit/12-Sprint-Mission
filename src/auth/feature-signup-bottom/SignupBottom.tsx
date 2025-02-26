import classNames from 'classnames/bind'
import styles from './SignupBottom.module.scss'
import Link from 'next/link'

const cx = classNames.bind(styles)

export const SignupBottom = () => {
  return (
    <div className={cx('container')}>
      계정이 이미 있으신가요? <Link href="/signin">로그인하기</Link>
    </div>
  )
}
