import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Productos from "./components/Productos/Productos";
import Perfil from "./components/Perfil/Perfil"
import Ajustes from "./components/Ajustes/Ajustes";
import Responsive from "./components/Responsive/Responsive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Responsive>
          <Routes>
            
          </Routes>
        </Responsive>
      </BrowserRouter>

    </>
  );
}

export default App;
