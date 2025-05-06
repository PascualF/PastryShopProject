import { useOutletContext, Link } from "react-router"
import "../styles/Shop.css"

export default function Shop() {
     

    const context = useOutletContext()
    const arrayShop = context.dataProducts
    console.log(arrayShop[1])

    return  (
        <div className="container-shop">
            {arrayShop.map((item) => {
                return (
                    <div key={item.id} className="container-card">
                        <img className="photo-products" src={item.image} alt={`image_${item.name}`} />
                        <div className="name_price_div">
                            <Link to={`/${item.id}`}><p className="item_name">{item.name}</p></Link>
                            <p className="item_price">{item.price}€</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}