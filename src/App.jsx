import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import { RegisterForm } from "./components/User/RegisterForm/RegisterForm";
import { RegisterConfirmation } from "./components/User/RegisterConfirmation/RegisterConfirmation";
import LoginForm from "./components/User/LoginForm/LoginForm";
import LogoutButton from "./components/User/LogoutButton/LogoutButton";
import { Profile } from "./components/User/Profile/Profile";
import GetProducts from "./components/Products/GetProducts/GetProducts";
import GetOneProduct from "./components/Products/GetOneProduct/GetOneProduct";
import Home from "./components/Home/Home";
import Cart from "./components/Products/Cart/Cart";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<GetProducts />} />
              <Route path="/products/:_id" element={<GetOneProduct />} />
              <Route path="/products/cart" element={<Cart />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/confirmation" element={<RegisterConfirmation />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/logout" element={<LogoutButton />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
