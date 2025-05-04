import {Link}from "react-router"

export default function Header() {
    return  (
        <>
            <h1>Shop</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
            </div>
        </>
    )
}