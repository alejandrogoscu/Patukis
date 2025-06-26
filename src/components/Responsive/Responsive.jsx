import { useState, useEffect } from 'react';


import NavbarDeskopUser from '../NavbarDeskopUser/NavbarDeskopUser';
import NavbarMobileUser from '../NavbarMobileUser/NavbarMobileUser';
import FooterDeskop from '../FooterDeskop/FooterDeskop';
import FooterMobile from '../FooterMobile/FooterMobile';


const Responsive = ({ children }) => {
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      console.log('handleResize activado!');
      console.log('Ancho de ventana detectado:', window.innerWidth);
      console.log('Altura de ventana detectada:', window.innerHeight);
    };


    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  console.log('Event listener de resize ELIMINADO (limpieza).');
  }, []);

  
const isDesktop = windowSize.width >= 771 
 const desktopHeaderHeight = 90;
  const desktopFooterHeight = 90; 

  const mobileHeaderHeight = 70; 
  const mobileFooterHeight = 70; 

 const currentHeaderHeight = isDesktop ? desktopHeaderHeight : mobileHeaderHeight;
  const currentFooterHeight = isDesktop ? desktopFooterHeight : mobileFooterHeight;
 return (
     <>
     
      {isDesktop ? <NavbarDeskopUser /> : <NavbarMobileUser />}

     
      <main style={{
        
        paddingTop: `${currentHeaderHeight}px`,
        paddingBottom: `${currentFooterHeight}px`,
        minHeight: '100vh', 
        boxSizing: 'border-box', 
        display: 'flex', 
        flexDirection: 'column',
      }}>
        {children} 
      </main>

      
      {isDesktop ? <FooterDeskop /> : <FooterMobile />}
    
    </>
  );
};




export default Responsive