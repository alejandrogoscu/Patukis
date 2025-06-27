
import { NavLink } from 'react-router-dom';

import homeIcono from '../../assets/icons/Home.svg'
import personIcono from '../../assets/icons/Person.svg'
import patoIcono from '../../assets/icons/patito.svg'
import carritoIcono from '../../assets/icons/Carrito.svg'
import '../NavbarMobileUser/NavbarMobileUser.scss';


let link = " ";

function NavbarMobileUser() {
  return (
    <nav className="navbar-container2">
      <ul className="navbar-list2">

        <li className="navbar-item2">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? 'navbar-link2 active' : 'navbar-link2'}>
            <img src={homeIcono} alt="Home" className="navbar-icon-img2" />

          </NavLink>
        </li>

        <li className="navbar-item2">
          <NavLink to="/Products" className="navbar-link2">
            <img src={patoIcono} alt="Productos" className="navbar-icon-img2" />
          </NavLink>
        </li>
        <li className="navbar-item2">
          <NavLink to="/products/cart" className="navbar-link2">
            <img src={carritoIcono} alt="Carrito" className="navbar-icon-img2" />
          </NavLink>
        </li>

        <li className="navbar-item2">
          <NavLink to="/register" className="navbar-link2">
            <img src={personIcono} alt="Perfil" className="navbar-icon-img2" />
          </NavLink>
        </li>

      </ul>
    </nav>
  )
};

export default NavbarMobileUser;