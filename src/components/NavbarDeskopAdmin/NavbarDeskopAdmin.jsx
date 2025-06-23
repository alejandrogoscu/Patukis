

import patoIconoCasco from '../../assets/icons/patito-casco-amarillo.svg'
import userIconoCasco from '../../assets/icons/user-casco-amarillo.svg'
import homeIcono from '../../assets/icons/Home.svg'
import SettingsIcono from '../../assets/icons/Settings.svg'


let link = " ";

function NavbarDeskopAdmin() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
           <li className="navbar-item">
                 <a href={link} className="navbar-link">
                   <img src={homeIcono} alt="Home" className="navbar-icon-img" />
                   HOME </a>
               </li>
       
        <li className="navbar-item">
                   <a href={link} className="navbar-link"> 
                   <img src={patoIconoCasco} alt="Productos" className="navbar-icon-img" /> 
                    PRODUCTOS </a>
                    </li>
                               <li className="navbar-item">
            <a href={link} className="navbar-link"> 
                   <img src={SettingsIcono} alt="Ajustes" className="navbar-icon-img" /> 
                    AJUSTES</a>
                  
        </li>
                      
            <li className="navbar-item">
            <a href={link} className="navbar-link"> 
                   <img src={userIconoCasco} alt="Administrador" className="navbar-icon-img" /> 
                    PERFIL</a>
                  
        </li>
      
      </ul>
    </nav>
  );
}

export default NavbarDeskopAdmin;