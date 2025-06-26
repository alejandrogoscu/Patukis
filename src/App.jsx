import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


import './App.css';

import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Productos from "./components/Productos/Productos";
import Perfil from "./components/Perfil/Perfil"
import Header from "./components/Header/Header";
import Ajustes from "./components/Ajustes/Ajustes";
//import FooterDeskop from "./components/FooterDeskop/FooterDeskop";
import FooterMobile from "./components/FooterMobile/FooterMobile";






function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Ajustes" element={<Ajustes />} />

        </Routes>
{/*<FooterDeskop/>*/}
        <FooterMobile/>
      </BrowserRouter>

    </>
  );
}

export default App;
