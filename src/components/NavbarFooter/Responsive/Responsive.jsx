import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../context/UserContext/UserState'; 
import NavbarDeskopUser from '../NavbarDeskopUser/NavbarDeskopUser';
import NavbarMobileUser from '../NavbarMobileUser/NavbarMobileUser';
import FooterDeskop from '../FooterDeskop/FooterDeskop';
import FooterMobile from '../FooterMobile/FooterMobile';
import NavbarDeskopAdmin from '../NavbarDeskopAdmin/NavbarDeskopAdmin';
import NavbarMobileAdmin from '../NavbarMobileAdmin/NavbarMobileAdmin';

const Responsive = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { user } = useContext(UserContext); 
   const isAdmin = user && user.role ===  "mamapato";             
   //console.log('Responsive: User Role:', user ? user.role : 'No logueado');
  //console.log('Responsive: Is Admin:', isAdmin);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    console.log('Event listener de resize ELIMINADO (limpieza).');
  }, []);

  const isDesktop = windowSize.width >= 771;
  //const isAdmin = role === 'admin';
  const desktopUserHeaderHeight = 90;
  const desktopAdminHeaderHeight = 90;
  const desktopFooterHeight = 90;

  const mobileAdminHeaderHeight = 70;
  const mobileUserHeaderHeight = 70;
  const mobileFooterHeight = 70;


useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let currentHeaderHeight;
  let currentNavbarComponent; // Variable para almacenar el componente Navbar a renderizar

  // Lógica para determinar qué Navbar renderizar y qué altura de header usar
  if (isDesktop) {
    // Si es ESCRITORIO
    if (isAdmin) {
      currentHeaderHeight = desktopAdminHeaderHeight;
      currentNavbarComponent = <NavbarDeskopAdmin />;
    } else {
      currentHeaderHeight = desktopUserHeaderHeight;
      currentNavbarComponent = <NavbarDeskopUser />;
    }
  } else { 
   
    if (isAdmin) {
      currentHeaderHeight = mobileAdminHeaderHeight;
      currentNavbarComponent = <NavbarMobileAdmin />;
    } else {
      currentHeaderHeight = mobileUserHeaderHeight;
      currentNavbarComponent = <NavbarMobileUser />;
    }
  }
  
 
  const currentFooterHeight = isDesktop ? desktopFooterHeight : mobileFooterHeight;
 

  return (
    <>
     
      {currentNavbarComponent}

      <main
        style={{
          paddingTop: `${currentHeaderHeight}px`,
          paddingBottom: `${currentFooterHeight}px`,
          minHeight: '100vh', 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </main>

     
      {isDesktop ? <FooterDeskop /> : <FooterMobile />}
    </>
  );
};

export default Responsive;

  /*const currentHeaderHeight = isDesktop ? desktopHeaderHeight : mobileHeaderHeight;
  const currentFooterHeight = isDesktop ? desktopFooterHeight : mobileFooterHeight;
  return (
    <>
      {isDesktop ? <NavbarDeskopUser /> : <NavbarMobileUser />}

      <main
        style={{
          paddingTop: `${currentHeaderHeight}px`,
          paddingBottom: `${currentFooterHeight}px`,
          minHeight: '100vh',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </main>

      {isDesktop ? <FooterDeskop /> : <FooterMobile />}
    </>
  );
};

export default Responsive;

{
  /*let currentHeaderHeight;
let currentNavbarComponent; // Variable para almacenar el componente Navbar a renderizar


if (isDesktop) {
    // Si es ESCRITORIO
    if (isAdmin) {
      currentHeaderHeight = desktopAdminHeaderHeight;
      currentNavbarComponent = <NavbarDeskopAdmin />;
    } else {
      currentHeaderHeight = desktopUserHeaderHeight;
      currentNavbarComponent = <NavbarDeskopUser />;
    }
  } else { 
    // Si es MÓVIL
    if (isAdmin) {
      currentHeaderHeight = mobileAdminHeaderHeight;
      currentNavbarComponent = <NavbarMobileAdmin />;
    } else {
      currentHeaderHeight = mobileUserHeaderHeight;
      currentNavbarComponent = <NavbarMobileUser />;
    }
  }
  
  // La altura del footer solo depende de si es desktop o móvil (no del rol, según lo planteado)
  const currentFooterHeight = isDesktop ? desktopFooterHeight : mobileFooterHeight;
  const currentFooterHeight = isDesktop ? desktopFooterHeight : mobileFooterHeight;

  return (
    <>
      
      {currentNavbarComponent}

     
      <main style={{
        paddingTop: `${currentHeaderHeight}px`,
        paddingBottom: `${currentFooterHeight}px`,
        minHeight: '100vh', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}>
       
      </main>

     
    </>
  );
};*/

