import './body.scss'
import ItemCard from '../Item/itemcard'


export default function Body ({items}) {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <ItemCard
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )
      })}
    </div>
  )
}