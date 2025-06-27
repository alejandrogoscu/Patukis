
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterForm } from './components/User/RegisterForm/RegisterForm';
import { UserProvider } from './context/UserContext/UserState';
import { RegisterConfirmation } from './components/User/RegisterConfirmation/RegisterConfirmation';
import { Profile } from './components/User/Profile/Profile';
import { ProductProvider } from "./context/ProductContext/ProductState";
import Responsive from "./components/Responsive/Responsive";
import GetProducts from "./components/Products/GetProducts/GetProducts";
import GetOneProduct from "./components/Products/GetOneProduct/GetOneProduct";
import Home from "./components/Home/Home";
import Cart from "./components/Products/Cart/Cart";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        
          <UserProvider>
            <ProductProvider>
              <Responsive>
              <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/confirmation" element={<RegisterConfirmation />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<GetProducts />} />
                <Route path="/products/:_id" element={<GetOneProduct />} />
                <Route path="/products/cart" element={<Cart />} />
              </Routes>
              </Responsive>
            </ProductProvider>
          </UserProvider>
        
      </BrowserRouter>
    </>
  );
}

export default App;
