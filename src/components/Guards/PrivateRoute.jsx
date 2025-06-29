import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
