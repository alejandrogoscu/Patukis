import { NavLink } from 'react-router-dom';
import patoIcono from '../../assets/icons/patito-casco-azul.svg'
import userIconoCasco from '../../assets/icons/user-casco-azul.svg'
import homeIcono from '../../assets/icons/Home.svg'
import SettingsIcono from '../../assets/icons/Settings.svg'




function NavbarMobileAdmin() {
    return (
        <nav className="navbar-container2">
            <ul className="navbar-list2">
                  <li className="navbar-item2">
                                <NavLink to="/" className={({ isActive }) =>
                                     isActive ? 'navbar-link2 active' : 'navbar-link2'
                                   }> 
                                   <img src={homeIcono} alt="Home" className="navbar-icon-img2" />
                                
                                 </NavLink>
                                 </li>
                <li className="navbar-item2">
                    <NavLink to="/Productos" className="navbar-link2">
                        <img src={patoIcono} alt="Productos" className="navbar-icon-img2" />
                    </NavLink>
                </li>


                <li className="navbar-item2">
                    <NavLink to="/Ajustes" className="navbar-link2">
                        <img src={SettingsIcono} alt="Ajustes" className="navbar-icon-img2" />
                    </NavLink>
                </li>

                <li className="navbar-item2">
                    <NavLink to="/Perfil" className="navbar-link2">
                        <img src={userIconoCasco} alt="Perfil" className="navbar-icon-img2" />
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default NavbarMobileAdmin;