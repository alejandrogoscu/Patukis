import "./App.css";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProducts from "./components/Products/GetProducts/GetProducts";
import GetOneProduct from "./components/Products/GetOneProduct/GetOneProduct";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<GetProducts />} />
            <Route path="/products/:_id" element={<GetOneProduct />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
