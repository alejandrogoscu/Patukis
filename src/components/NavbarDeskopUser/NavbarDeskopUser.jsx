import React, { useContext } from 'react'; 
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';

import patoIcono from '../../assets/icons/patito.svg'
import carritoIcono from '../../assets/icons/Carrito.svg'
import personIcono from '../../assets/icons/Person.svg'
import homeIcono from '../../assets/icons/Home.svg'
import { ProductContext } from '../../context/ProductContext/ProductState';

import '../NavbarDeskopUser/NavbarDeskopUser.scss';


let link = " ";

function NavbarDeskopUser() {
  const { cart } = useContext(ProductContext);
  const itemCount = cart ? cart.length : 0;
  

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
 <NavLink to="/Products" end className="navbar-link"> 
            <img src={patoIcono} alt="Products" className="navbar-icon-img" />
            PRODUCTOS
          </NavLink>
          </li>
        

 <li className="navbar-item">
 <NavLink to="/products/cart" className="navbar-link"> 
 <Badge
          count={itemCount} 
          showZero
          overflowCount={99}
          offset={[10, 0]}
        >
            <img src={carritoIcono} alt="Carrito" className="navbar-icon-img" />
           </Badge>
             CARRITO
          </NavLink>
          </li>
        
 <li className="navbar-item">
 <NavLink to="/register" className="navbar-link"> 
            <img src={personIcono} alt="Perfil" className="navbar-icon-img" />
            PERFIL
          </NavLink>
          </li>
        
      

     

      </ul>
    </nav>
  );
}

export default NavbarDeskopUser;