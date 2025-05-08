import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "../styles/Layout.css"
import data from "../data.js"
import { useState } from "react";

export default function Layout() {

    const [cartItems, setCartItems] = useState([])
    const [productsQuant, setProductsQuant] = useState(0)

    const dataProducts = data

    // This add an item to the cart. Checking the exixtence
    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            // this will check, one item at a time, if it exists in the cart, if yes, just adds to the existing quantity.
            const checkExisting = prevItems.find(item => item.id === product.id);
            setProductsQuant(productsQuant + quantity)
            if (checkExisting) {
                return prevItems.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity + quantity}
                    : item
                )
            } else {
                return [...prevItems, {...product, quantity}]
            }
        })
    }

    // This will remove and ite from the cart.
    const removeFromCart = (productId, productQuantity) => {
        setCartItems(prevItems => {
            setProductsQuant(productsQuant - productQuantity)
            return prevItems.filter(item => 
                item.id !== productId
            )
        })
    }

    return  (
        <div className="layout-container">
            <Header 
                productsQuant={productsQuant}
            />
            <main className="content-area"> {/* To not create a css file */}
                <Outlet 
                    context={{
                        dataProducts,
                        cartItems,
                        addToCart,
                        removeFromCart
                    }}
                />
            </main>
            <Footer />
        </div>
    )
}