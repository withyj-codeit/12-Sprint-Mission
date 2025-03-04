import classNames from 'classnames/bind'
import styles from './WineFilter.module.scss'
import { TypeFilter } from '@/wine/feature-wine-filter/TypeFilter'
import { useWines } from '@/wine/data-access-wines'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

export const WineFilter = () => {
  const router = useRouter()
  const { query } = router

  const { data } = useWines({
    limit: 10,
    ...query,
  })

  return (
    <div className={cx('container')}>
      <span>Total: {data?.totalCount}</span>
      <TypeFilter />
    </div>
  )
}
