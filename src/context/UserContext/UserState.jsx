import { createContext, useReducer } from 'react';
import { initialState, userReducer } from './UserReducer';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const register = async (userData) => {
    try {
      const res = await axios.post('https://patukisapi.onrender.com/users', userData);
      console.log('Respuesta:', res.data);
      dispatch({ type: 'REGISTER', payload: res.data });
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTZlNmRlZTlhNDM5ZDAyMzk3NDVhZiIsImlhdCI6MTc1MDUyNTcwN30.dNDPyZuqZdIWVs3efrZ62ahOR4bG9vYvFHFoqE6DzG8'; // HARDCODEADO AHORA MISMO.
      const res = await axios.get('https://patukisapi.onrender.com/users/me', { headers: { Authorization: token } });
      dispatch({ type: 'GET_USER', payload: res.data });
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  return <UserContext.Provider value={{ user: state.user, register, getUserProfile }}>{children}</UserContext.Provider>;
};
