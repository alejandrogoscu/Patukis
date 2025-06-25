


//import NavbarDeskopUser from '../NavbarDeskopUser/NavbarDeskopUser';
//import '../NavbarDeskopUser/NavbarDeskopUser.scss';


//import NavbarDeskopAdmin from '../NavbarDeskopAdmin/NavbarDeskopAdmin';
//import NavbarMobileUser from '../NavbarMobileUser/NavbarMobileUser';
import '../NavbarMobileUser/NavbarMobileUser.scss';

import NavbarMobileAdmin from '../NavbarMobileAdmin/NavbarMobileAdmin';

const Header = () => {
  return (
    <header className="main-header">
    
      {/*<NavbarDeskopUser />*/ }

     
      {/*<NavbarDeskopAdmin />*/}
      {/*<NavbarMobileUser />*/}
      <NavbarMobileAdmin />

     
    </header>
  );
};

export default Header;