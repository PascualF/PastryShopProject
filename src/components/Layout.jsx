import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
    return  (
        <>
            <Header />
            <main style={{ flex: 1}}> {/* To not create a css file */}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}