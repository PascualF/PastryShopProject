import {Link} from "react-router"
import cartIcon from "../assets/shopping-cart.svg"
import "../styles/Header.css"

export default function Header() {
    return  (
        <div className="container-header">
            <h2 className="h2-title">Eatalot</h2>
            <div className="div-home-shop">
                <Link className="home-link" to="/">Home</Link>
                <Link className="shop-link" to="shop">Shop</Link>
            </div>
            <Link to="cart"><img className="cartIcon" src={cartIcon} alt="cartIcon" /></Link>
        </div>
    )
}