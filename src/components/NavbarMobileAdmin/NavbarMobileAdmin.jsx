
import patoIcono from '../../assets/icons/patito-casco-azul.svg'
import userIconoCasco from '../../assets/icons/user-casco-azul.svg'
import homeIcono from '../../assets/icons/Home.svg'
import SettingsIcono from '../../assets/icons/Settings.svg'


let link = " ";

function NavbarMobileAdmin() {
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
                        <img src={SettingsIcono} alt="ajustes" className="navbar-icon-img2" />
                    </a>

                </li>



                <li className="navbar-item2">
                    <a href={link} className="navbar-link2"> 
                        <img src={userIconoCasco} alt="Administrador" className="navbar-icon-img2" />
                    </a>

                </li>




              
            </ul>
        </nav>
    );
}

export default NavbarMobileAdmin;