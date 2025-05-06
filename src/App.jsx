import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import { BrowserRouter, Route, Routes } from "react-router"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="/:id" element={<Detail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
