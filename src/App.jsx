import logo from './assets/Logo_1.svg';
import patos from './assets/paticontructors.png';
import './App.css';
import NavbarDeskopUser from './components/NavbarDeskopUser/NavbarDeskopUser';
import './components/NavbarDeskopUser/NavbarDeskopUser.scss';
import NavbarDeskopAdmin from './components/NavbarDeskopAdmin/NavbarDeskopAdmin';
import NavbarMobileUser from './components/NavbarMobileUser/NavbarMobileUser';
import './components/NavbarMobileUser/NavbarMobileUser.scss';
import NavbarMobileAdmin from './components/NavbarMobileAdmin/NavbarMobileAdmin';




function App() {
  return (
    <div className="contenedor">
       <img src={logo} />
      <img src={patos} width="640px" />
      <h2 className="text">¡Próximamente!</h2>
      <NavbarDeskopUser/>
      <NavbarDeskopAdmin/>
      <NavbarMobileUser/>
      <NavbarMobileAdmin/>
     </div>
  );
}

export default App;
