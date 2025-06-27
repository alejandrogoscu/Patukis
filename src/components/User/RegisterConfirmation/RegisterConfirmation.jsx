import patitoCorreo from '../../../assets/patitoCorreo.png';
import './RegisterConfirmation.css';

export const RegisterConfirmation = () => {
  return (
    <div className="confirmation__container">
      <h3 className="confirmation__title">¡Registrado!</h3>
      <img className="confirmation__img" src={patitoCorreo} alt="Patito de goma lanzando un sobre al aire." />
      <p className="confirmation__text">Le hemos enviado un mail de confirmación</p>
    </div>
  );
};
