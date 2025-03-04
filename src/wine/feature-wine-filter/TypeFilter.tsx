import classNames from 'classnames/bind'
import styles from './TypeFilter.module.scss'
import { FilterSection } from '@/wine/feature-wine-filter/FilterSection'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { WineType } from '@/wine/util-types/wine'
import { Chip } from '@/shared/design-system/chip'

const cx = classNames.bind(styles)

export const TypeFilter = () => {
  const router = useRouter()
  const { pathname, query } = router
  const { type, ...restQuery } = query

  return (
    <FilterSection label="WINE TYPES">
      <div className={cx('chips')}>
        <Link
          href={{
            pathname,
            query: type === WineType.Red ? { ...restQuery } : { ...restQuery, type: WineType.Red }
          }}
          scroll={false}
        >
          <Chip color={ query?.type === WineType.Red ? 'primary' : 'white' }>Red</Chip>
        </Link>
        <Link
          href={{
            pathname,
            query: type === WineType.White ? { ...restQuery } : { ...restQuery, type: WineType.White }
          }}
          scroll={false}
        >
          <Chip color={ query?.type === WineType.White ? 'primary' : 'white' }>White</Chip>
        </Link>
        <Link
          href={{
            pathname,
            query: type === WineType.Sparkling ? { ...restQuery } : { ...restQuery, type: WineType.Sparkling }
          }}
          scroll={false}
        >
          <Chip color={ query?.type === WineType.Sparkling ? 'primary' : 'white' }>Sparkling</Chip>
        </Link>
      </div>
    </FilterSection>
  )
}
