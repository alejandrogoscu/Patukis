import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';
import './logoutButton.css';

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return (
    <button className="logout__btn" onClick={logout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
