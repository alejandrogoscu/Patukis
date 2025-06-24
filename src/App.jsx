import logo from "./assets/Logo_1.svg";
import "./App.css";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProducts from "./components/Products/GetProducts/GetProducts";

function App() {
  return (
    <>
      <img src={logo} />

      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/products" element={<GetProducts />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
