import './Card.css'

export const Card = ({
  imageSrc,
  name,
  description,
  price,
  favoriteCount
}) => {
  return (
    <div className='card'>
      <img
        className='image'
        src={imageSrc}
        alt={`${name} 상품 이미지`}
      />
      <h2 className='name'>{name}</h2>
      <p className='description'>{description}</p>
      <span>{price}</span>
      <span>{favoriteCount}</span>
    </div>
  )
}
