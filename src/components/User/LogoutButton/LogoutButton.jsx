import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return (
    <button onClick={logout} style={{ backgroundColor: 'red', color: 'white' }}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
