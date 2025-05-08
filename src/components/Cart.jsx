import { useOutletContext } from "react-router"
import trashDelete from "../assets/delete.png"
import "../styles/Cart.css"

export default function Cart() {

    const context = useOutletContext()
    const { cartItems, removeFromCart, updateQuantity, fullPrice } = context;

    const handleDelete = (productId) => {
        removeFromCart(productId)
    }

    const cartEmpty = () => {
        return (
            <div className="empty-container">
                    <p>The cart is</p> 
                    <strong>Empty</strong>  
            </div>
        )
    }

    const handleChangeInput = (id, e) => {
        const value = parseInt(e.target.value)
        if(!isNaN(value) && value >= 1 && value <= 99){
           updateQuantity(id, value)
        }
    }

    const incrementReduceQuantity = (productId, newQuant) => {
        if(newQuant >= 1) {
            return updateQuantity(productId, newQuant)
        }
    }

    const checkoutNotAvailable = () => {
        alert("Checkout button does not work...")
    }

    return  (
        <div className="container-cart">
            {
                cartItems.length !== 0 && <div className="checkout-price"><p>{fullPrice}€</p><button onClick={checkoutNotAvailable}>Checkout</button></div>
            }
            {!cartItems || cartItems.length === 0 ? cartEmpty() : cartItems.map(item => {
                return (
                    <div key={item.id} className="product-cart-card">
                        <img className="img-cart-product" src={item.image} alt={`image-cart-${item.name}`} />
                        <p>{item.name}<strong className="item-price-cart">{item.price * item.quantity}€</strong></p>
                        <button 
                        className="lower-quant"
                        onClick={() => incrementReduceQuantity(item.id, item.quantity - 1)}
                        >-</button>
                        <input 
                            className="input-quant"
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleChangeInput(item.id, e)}
                            min={1}
                            max={99}
                        />
                        <button 
                            className="higher-quant"
                            onClick={() => incrementReduceQuantity(item.id, item.quantity + 1)}
                        >+</button>
                        <img 
                            className="img-trash-delete" 
                            src={trashDelete} 
                            alt="img-trash-delete" 
                            onClick={() => handleDelete(item.id, item.quantity)}
                        />
                    </div>
                )
            })}
        </div>
    )
}