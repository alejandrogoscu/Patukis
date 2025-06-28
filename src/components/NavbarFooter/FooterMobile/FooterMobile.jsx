import LogoAmarillo from '../../../assets/icons/Logo_1.svg';
import './FooterMobile.scss';

const FooterMobile = () => {
  return (
    <footer className="main-footer-mobile">
      <div className="footer-content-mobile">
        <div className="footer-section-mobile">
          <img src={LogoAmarillo} alt="Logo_1" className="footer-logo-mobile" />
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
