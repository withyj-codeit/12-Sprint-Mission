import classNames from 'classnames/bind'
import styles from './WineList.module.scss'
import { useWines } from '@/wine/data-access-wines'
import { WineReviewCard } from '@/wine/feature-wine-list/WineReviewCard'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

export const WineList = () => {
  const router = useRouter()
  const { query } = router

  const { data } = useWines({
    limit: 10,
    ...query
  })

  return (
    <div className={cx('container')}>
      {data?.list.map((wine) => (
        <WineReviewCard key={wine.id} {...wine} />
      ))}
    </div>
  )
}
