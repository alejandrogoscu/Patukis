
import { NavLink } from 'react-router-dom';
import patoIconoCasco from '../../assets/icons/patito-casco-amarillo.svg'
import AdminIconoCasco from '../../assets/icons/user-casco-amarillo.svg'
import homeIcono from '../../assets/icons/Home.svg'
import SettingsIcono from '../../assets/icons/Settings.svg'


let link = " ";

function NavbarDeskopAdmin() {
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
            <img src={patoIconoCasco} alt="Productos" className="navbar-icon-img" />
            PRODUCTOS
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Ajustes" className="navbar-link">
            <img src={SettingsIcono} alt="Ajustes" className="navbar-icon-img" />
            AJUSTES
          </NavLink>
        </li>


        <li className="navbar-item">
          <NavLink to="/Perfil" className="navbar-link">
            <img src={AdminIconoCasco} alt="Perfil" className="navbar-icon-img" />
            PERFIL
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDeskopAdmin;