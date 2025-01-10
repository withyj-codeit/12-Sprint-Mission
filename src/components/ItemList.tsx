import { Item } from "@/types/Item"

type ItemListProps = {
  data: Item[];
}

export const ItemList = ({ data }: ItemListProps) => {

  return (
    <div>
      <div className="item-list">
        {data.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <div>Tags: {item.tags.join(", ")}</div>
            {item.images.length > 0 ? (
              <img src={item.images[0]} alt={item.name} width="200" />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
