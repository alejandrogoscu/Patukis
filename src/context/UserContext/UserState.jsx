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

  return <UserContext.Provider value={{ user: state.user, register }}>{children}</UserContext.Provider>;
};
