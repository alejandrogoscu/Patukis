import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';

import homeIcono from '../../../assets/icons/Home.svg';
import personIcono from '../../../assets/icons/Person.svg';
import patoIcono from '../../../assets/icons/patito.svg';
import carritoIcono from '../../../assets/icons/Carrito.svg';
import './NavbarMobileUser.scss';
import { ProductContext } from '../../../context/ProductContext/ProductState';

let link = ' ';

function NavbarMobileUser() {
  const { cart } = useContext(ProductContext);
  const itemCount = cart ? cart.length : 0;
  return (
    <nav className="navbar-container2">
      <ul className="navbar-list2">
        <li className="navbar-item2">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar-link2 active' : 'navbar-link2')}>
            <img src={homeIcono} alt="Home" className="navbar-icon-img2" />
          </NavLink>
        </li>

        <li className="navbar-item2">
          <NavLink to="/Products" end className="navbar-link2">
            <img src={patoIcono} alt="Productos" className="navbar-icon-img2" />
          </NavLink>
        </li>
        <li className="navbar-item2">
          <NavLink to="/products/cart" className="navbar-link2">
            <Badge
              count={itemCount} // Usa la longitud del carrito aquí
              overflowCount={99}
              offset={[12, 10]}
              size="medium"
              color="#004CFF"
            >
              <img src={carritoIcono} alt="Carrito" className="navbar-icon-img2" />
            </Badge>
          </NavLink>
        </li>

        <li className="navbar-item2">
          <NavLink to="/login" className="navbar-link2">
            <img src={personIcono} alt="Perfil" className="navbar-icon-img2" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarMobileUser;
