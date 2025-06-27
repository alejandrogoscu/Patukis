import { useReducer } from 'react';
import UserContext from './UserContext'; // ✅ esto está correcto
import UserReducer from './UserReducer';
import axios from 'axios';

// Valores iniciales desde localStorage
const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  token,
  user,
  isAuthenticated: !!token,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (userData) => {
    try {
      const res = await axios.post('https://patukisapi.onrender.com/users', userData);
      dispatch({ type: 'REGISTER', payload: res.data });
      return true;
    } catch (error) {
      console.error('Error en el registro:', error.response?.data || error.message);
      return false;
    }
  };

  const login = async (userData) => {
    try {
      const res = await axios.post('https://patukisapi.onrender.com/users/login', userData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: 'LOGIN', payload: { token, user } });
      return true;
    } catch (error) {
      console.error('Error al hacer login:', error.response?.data || error.message);
      return false;
    }
  };

  // 3) LOGOUT: POST /users/logout + limpieza frontend
  const logout = async () => {
    try {
      await axios.post("https://patukisapi.onrender.com/users/logout");
    } catch (err) {
      console.warn("Error en logout (ignorado):", err);
    } finally {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return (
    <UserContext.Provider value={{ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 


