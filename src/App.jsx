import logo from "./assets/Logo_1.svg";
import patos from "./assets/paticontructors.png";
import "./App.css";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProducts from "./components/Products/GetProducts/GetProducts";

function App() {
  return (
    <div className="contenedor">
      <img src={logo} />

      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/products" element={<GetProducts />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
