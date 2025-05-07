import { useParams, useOutletContext } from "react-router";
import "../styles/Detail.css"
import { useState } from "react";

export default function Detail() {

    const [handleChange, setHandleChange] = useState(1)

    // Get the ID from /:id
    const { id } = useParams()

    // get context data products
    const context = useOutletContext()
    const { dataProducts, addToCart} = context
    const productDetail = dataProducts[id-1]

    //handle the changes inside input
    const handleChangeInput = (e) => {
        console.log(e.target.value)
        const value = parseInt(e.target.value)
        if(!isNaN(value) && value >= 1){ // if value is not Nan and higher or equal to 1
            setHandleChange(value)
        }
    }

    // handle the buttons + and -
    const buttonAddQuant = () => {
        if(handleChange >= 1){
            const newValue = handleChange + 1
            setHandleChange(newValue)
        }
    }

    const buttonRemoveQuant = () => {
        if(handleChange > 1 ){
            const newValue = handleChange - 1
            setHandleChange(newValue)
        }
    }

    // button add quantity
    const handleAddInput = () => {
        addToCart(productDetail ,handleChange)
    }

    return  (
        <div className="main-container">
            <div className="container-detail">
                <img className="image-product-detail" src={productDetail.image} alt={`image-${productDetail.name}`} />
                <div className="info-product">
                    <p>{productDetail.name} <strong>{productDetail.price}€</strong></p>
                    <p>{productDetail.description}</p>
                    <div className="add-product">
                        <button 
                            className="lower-quant"
                            onClick={buttonRemoveQuant}
                        >-</button>
                        <input 
                            className="input-quant"
                            type="number"
                            onChange={handleChangeInput}
                            value={handleChange}
                            max={99}
                        />
                        <button 
                            className="higher-quant"
                            onClick={buttonAddQuant}
                        >+</button>
                    </div>
                    <button 
                        className="add-to-cart"
                        onClick={handleAddInput}

                    >Add</button>
                </div>
            </div>
        </div>
    )
}