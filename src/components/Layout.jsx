import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "../styles/Layout.css"
import data from "../data.js"
import { useState } from "react";

export default function Layout() {

    const [cartItems, setCartItems] = useState([])

    const dataProducts = data

    // This add an item to the cart. Checking the exixtence
    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            // this will check, one item at a time, if it exists in the cart, if yes, just adds to the existing quantity.
            const checkExisting = prevItems.find(item => item.id === product.id);
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
    const removeFromCart = (product, quantity) => {
        console.log(`this is the product ${product}`)
        console.log(`This is the quant: ${quantity}`)
    }

    return  (
        <div className="layout-container">
            <Header />
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