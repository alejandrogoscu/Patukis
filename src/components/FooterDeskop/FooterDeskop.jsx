import Logo from '../../assets/icons/Logo_2_azul.png'
import '../FooterDeskop/FooterDeskop.scss';

const FooterDeskop = () => {
  return (
    <footer className="main-footer"> 
      <div className="footer-content"> 
        
        
        <div className="footer-section"> 
          <img src={Logo} alt="Logo de la aplicación" className="footer-logo" />
          
        </div>
        
       
        <p className="footer-rights">© 2025 La Duck Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
  
}

export default FooterDeskop