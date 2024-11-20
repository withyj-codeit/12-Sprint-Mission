import './CardList.css'
import { Card } from "../Card"

const DEFAULT_IMAGE_SOURCE = 'https://i.imgur.com/Kg8Q8Oe.jpeg'

export const CardList = ({ list }) => {
  if (!list) return '로딩중...'

  return (
    <div className='cardList'>
      {list.map(({ id, images, ...rest }) => (
        <Card
          key={id}
          imageSrc={images[0] || DEFAULT_IMAGE_SOURCE}
          {...rest}
        />
      ))}
    </div>
  )
}
