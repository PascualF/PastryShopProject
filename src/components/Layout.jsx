import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "../styles/Layout.css"

export default function Layout() {
    return  (
        <div className="layout-container">
            <Header />
            <main className="content-area"> {/* To not create a css file */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}