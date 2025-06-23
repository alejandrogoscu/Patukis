

import homeIcono from '../../assets/icons/Home.svg'
import personIcono from '../../assets/icons/Person.svg'
import patoIcono from '../../assets/icons/patito.svg'
import carritoIcono from '../../assets/icons/Carrito.svg'


let link = " ";

function NavbarMobileUser() {
  return (
    <nav className="navbar-container2">
      <ul className="navbar-list2">
        <li className="navbar-item2">
                         <a href={link} className="navbar-link2">
                           <img src={homeIcono} alt="Home" className="navbar-icon-img2" />
                           </a>
                       </li>
      

        <li className="navbar-item2">
                   <a href={link} className="navbar-link2"> 
                   <img src={patoIcono} alt="Productos" className="navbar-icon-img2" /> 
                  </a>
                
                  </li>
                       <li className="navbar-item2">
                            <a href={link} className="navbar-link2">
                              <img src={carritoIcono} alt="Carrito" className="navbar-icon-img2" />
                               </a>
                  
                          </li>
                                      <li className="navbar-item2">
                            <a href={link} className="navbar-link2">
                              <img src={personIcono} alt="Usuario" className="navbar-icon-img2" />
                               </a>
                  
                          </li>

      

   
      </ul>
    </nav>
  ); 
}

export default NavbarMobileUser;