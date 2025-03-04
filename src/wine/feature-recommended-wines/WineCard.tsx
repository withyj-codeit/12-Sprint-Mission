import classNames from 'classnames/bind'
import styles from './WineCard.module.scss'

const cx = classNames.bind(styles)

type WineCardProps = {
  name: string
  avgRating: number
}

export const WineCard = ({
  name,
  avgRating,
}: WineCardProps) => {
  return (
    <div className={cx('container')}>
      <span className={cx('rating')}>
        {avgRating}
      </span>
      <span>
        {name}
      </span>
    </div>
  )
}
