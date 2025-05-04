import {Link} from "react-router"
import cartIcon from "../assets/shopping-cart.svg"
import "../styles/Header.css"

export default function Header() {
    return  (
        <div className="container-header">
            <h2>Eatalot</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
            </div>
            <Link to="cart"><img className="cartIcon" src={cartIcon} alt="cartIcon" /></Link>
        </div>
    )
}