import './itemcard.scss'


export default function ItemCard ({key, image, name, price}) {
    return (
        <button className="item-card" key={key}>
            <img src={image} className="item-img"/>
            <p>
                제품명 : <span className="itme-name">{name}</span>
            </p>
            <p>
                가격 : <span className="item-price">{price}</span>
            </p>
        </button>
    )
}