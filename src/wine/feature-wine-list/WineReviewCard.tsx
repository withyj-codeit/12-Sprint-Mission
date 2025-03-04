import classNames from 'classnames/bind'
import styles from './WineReviewCard.module.scss'
import { WineType } from '@/wine/util-types/wine'

const cx = classNames.bind(styles)

type WineReviewCardProps = {
  name: string
  avgRating: number
  price: number
  type: WineType
}

export const WineReviewCard = ({ name, avgRating, price, type }: WineReviewCardProps) => {
  return (
    <div className={cx('container')}>
      <span className={cx('rating')}>
        {avgRating}
      </span>
      <span>
        {name}
      </span>
      <span>
        {price}
      </span>
      <span>
        {type}
      </span>
    </div>
  )
}
