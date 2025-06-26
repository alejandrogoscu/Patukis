
import { NavLink } from 'react-router-dom';

import patoIcono from '../../assets/icons/patito.svg'
import carritoIcono from '../../assets/icons/Carrito.svg'
import personIcono from '../../assets/icons/Person.svg'
import homeIcono from '../../assets/icons/Home.svg'

import '../NavbarDeskopUser/NavbarDeskopUser.scss';


let link = " ";

function NavbarDeskopUser() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">

            <li className="navbar-item">
         <NavLink to="/" className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }> 
            <img src={homeIcono} alt="Home" className="navbar-icon-img" />
            HOME
          </NavLink>
          </li>

          <li className="navbar-item">
 <NavLink to="/Productos" className="navbar-link"> 
            <img src={patoIcono} alt="Productos" className="navbar-icon-img" />
            PRODUCTOS
          </NavLink>
          </li>
        

 <li className="navbar-item">
 <NavLink to="/Carrito" className="navbar-link"> 
            <img src={carritoIcono} alt="Carrito" className="navbar-icon-img" />
            CARRITO
          </NavLink>
          </li>
        
 <li className="navbar-item">
 <NavLink to="/Perfil" className="navbar-link"> 
            <img src={personIcono} alt="Perfil" className="navbar-icon-img" />
            PERFIL
          </NavLink>
          </li>
        
      

     

      </ul>
    </nav>
  );
}

export default NavbarDeskopUser;