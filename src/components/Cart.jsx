import { useOutletContext } from "react-router"
import trashDelete from "../assets/delete.png"
import "../styles/Cart.css"

export default function Cart() {

    const context = useOutletContext()
    const { cartItems, removeFromCart } = context;

    const handleDelete = (productId, productQuantity) => {
        removeFromCart(productId, productQuantity)
    }



    return  (
        <div className="container-cart">
            {cartItems.map(item => {
                return (
                    <div key={item.id} className="product-cart-card">
                        <img className="img-cart-product" src={item.image} alt={`image-cart-${item.name}`} />
                        <p>{item.name}</p>
                        <button 
                        className="lower-quant"
                        /* onClick={buttonRemoveQuant} */
                        >-</button>
                        <input 
                            className="input-quant"
                            type="number"
                            /* value={item.quantity} */
                            /* onChange={handleChangeInput}
                            value={handleChange} */
                            max={99}
                        />
                        <button 
                            className="higher-quant"
                            /* onClick={buttonAddQuant} */
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