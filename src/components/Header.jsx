import {Link} from "react-router"
import cartIcon from "../assets/shopping-cart.svg"
import "../styles/Header.css"

export default function Header({ productsQuant }) {
    return  (
        <div className="container-header">
            <h2 className="h2-title">Eatalot</h2>
            <div className="div-home-shop">
                <Link className="home-link" to="/">Home</Link>
                <Link className="shop-link" to="shop">Shop</Link>
            </div>
            <div className="contanier-cart-quant">
                <Link to="cart">
                    <img 
                        className="cartIcon" 
                        src={cartIcon} 
                        alt="cartIcon"
                    />
                </Link>
                <p className="quant-cart">
                    ({productsQuant})
                </p>  
            </div>
        </div>
    )
}