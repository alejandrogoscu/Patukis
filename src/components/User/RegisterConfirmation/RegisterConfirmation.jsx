import patitoCorreo from '../../../assets/patitoCorreo.png';

export const RegisterConfirmation = () => {
  return (
    <div>
      <h3>¡Registrado!</h3>
      <img src={patitoCorreo} alt="Patito de goma lanzando un sobre al aire." />
      <p>Le hemos enviado un mail de confirmación</p>
    </div>
  );
};
