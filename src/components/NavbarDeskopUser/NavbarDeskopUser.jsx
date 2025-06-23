


import patoIcono from '../../assets/icons/patito.svg'
import carritoIcono from '../../assets/icons/Carrito.svg'
import personIcono from '../../assets/icons/Person.svg'
import homeIcono from '../../assets/icons/Home.svg'


let link = " ";

function NavbarDeskopUser() {
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
            <img src={patoIcono} alt="Productos" className="navbar-icon-img" />
            PRODUCTOS </a>

        </li>

        <li className="navbar-item">
          <a href={link} className="navbar-link">
            <img src={carritoIcono} alt="Carrito" className="navbar-icon-img" />
            CARRITO </a>

        </li>

        <li className="navbar-item">
          <a href={link} className="navbar-link">
            <img src={personIcono} alt="Usuario" className="navbar-icon-img" />
            PERFIL </a>

        </li>

      </ul>
    </nav>
  );
}

export default NavbarDeskopUser;