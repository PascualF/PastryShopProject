import { useParams, useOutletContext } from "react-router";
import "../styles/Detail.css"

export default function Detail() {

    // Get the ID from /:id
    const { id } = useParams()

    // get context data products
    const context = useOutletContext()
    const productDetail = context.dataProducts[id-1]
    console.log(productDetail)

    return  (
        <div className="main-container">
            <div className="container-detail">
                <img src={productDetail.image} alt={`image-${productDetail.name}`} />
                <div className="info-product">
                    <p>{productDetail.name} {productDetail.price}€</p>
                    <p>{productDetail.description}</p>
                    <div className="add-product">
                        <button className="lower-quant">-</button>
                        <input type="number" />
                        <button className="higher-quant">+</button>
                    </div>
                    <button className="add-to-cart">Add</button>
                </div>
            </div>
        </div>
    )
}