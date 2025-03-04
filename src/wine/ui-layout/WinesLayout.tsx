import classNames from 'classnames/bind'
import styles from './WinesLayout.module.scss'
import { ReactElement } from 'react'

const cx = classNames.bind(styles)

type WinesLayoutProps = {
  recommendedWines: ReactElement
  searchBar: ReactElement
  wineFilter: ReactElement
  wineRegistration: ReactElement
  wineList: ReactElement
}

export const WinesLayout = ({
  recommendedWines,
  searchBar,
  wineFilter,
  wineRegistration,
  wineList,
}: WinesLayoutProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('recommended-wines')}>
        {recommendedWines}
      </div>
      <div className={cx('search-bar')}>
        {searchBar}
      </div>
      <div className={cx('search-filter')}>
        {wineFilter}
      </div>
      <div className={cx('wine-registration')}>
        {wineRegistration}
      </div>
      <div className={cx('wine-list')}>
        {wineList}
      </div>
    </div>
  )
}
