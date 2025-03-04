import classNames from 'classnames/bind'
import styles from './WineCardList.module.scss'
import { Wine } from '@/wine/util-types/wine'
import { WineCard } from '@/wine/feature-recommended-wines/WineCard'

const cx = classNames.bind(styles)

type WineCardListProps = {
  wines: Wine[]
}

export const WineCardList = ({ wines }: WineCardListProps) => {
  return (
    <div className={cx('container')}>
      <span>이번 달 추천 와인</span>
      <div className={cx('wines')}>
        {wines.map((wine) => (
          <WineCard
            key={wine.id}
            name={wine.name}
            avgRating={wine.avgRating}
          />
        ))}
      </div>
    </div>
  )
}
