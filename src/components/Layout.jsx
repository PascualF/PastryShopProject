import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "../styles/Layout.css"
import { useState } from "react";
import data from "../data.js"

export default function Layout() {

    const [dataProducts, setDataProducts] = useState(data)

    const updateCartInfo = (item) => {
        console.log(item)
    }

    return  (
        <div className="layout-container">
            <Header />
            <main className="content-area"> {/* To not create a css file */}
                <Outlet 
                    context={{
                        dataProducts:dataProducts
                    }}
                />
            </main>
            <Footer />
        </div>
    )
}