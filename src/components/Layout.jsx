import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "../styles/Layout.css"
import data from "../data.js"
import { useState } from "react";

export default function Layout() {

    const [cartItems, setCartItems] = useState([])

    const dataProducts = data

    // This was a better options the using useState, has it was only updating the values of
    // the product being updated.
    const productsQuant = cartItems.reduce((total, currItem) => total + currItem.quantity, 0);
    const fullPrice = cartItems.reduce((total, currItem) => total + (currItem.price * currItem.quantity),0)

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
    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            return prevItems.filter(item => 
                item.id !== productId
            )
        })
    }

    const updateQuantity = (productId, newQuant) => {
        setCartItems(prevItems => {
            // here I update the new quantity modyfied in the cart directly
            return prevItems.map(item => 
                item.id === productId ? {...item, quantity: newQuant} : item
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
                        removeFromCart,
                        updateQuantity,
                        fullPrice
                    }}
                />
            </main>
            <Footer />
        </div>
    )
}