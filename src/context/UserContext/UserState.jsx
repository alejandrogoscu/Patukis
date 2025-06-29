import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";

const API_URL = "https://patukisapi.onrender.com/users";

// Valores iniciales desde localStorage
const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  token,
  user,
  isAuthenticated: !!token,
  wishlist: [],
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (userData) => {
    try {
      const res = await axios.post(API_URL, userData);
      dispatch({ type: "REGISTER", payload: res.data });
      return true;
    } catch (error) {
      console.error("Error en el registro:", error.response?.data || error.message);
      return false;
    }
  };

  const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: "GET_USER", payload: res.data });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  };

  const login = async (userData) => {
    try {
      const res = await axios.post(`${API_URL}/login`, userData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: "LOGIN", payload: { token, user } });
      return true;
    } catch (error) {
      console.error("Error al hacer login:", error.response?.data || error.message);
      return false;
    }
  };

  // 3) LOGOUT: POST /users/logout + limpieza frontend
  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.warn("Error en logout (ignorado):", err);
    } finally {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  };

  const addToWishList = async (productId) => {
    try {
      const res = await axios.put(`${API_URL}/wishlist/${productId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al añadir a wishlist:", error.response?.data || error.message);
    }
  };

  const removeFromWishList = async (productId) => {
    try {
      if (!productId || typeof productId !== "string") {
        console.warn("ID del producto inválido:", productId);
        return;
      }

      await axios.delete(`${API_URL}/wishlist/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: productId,
      });
    } catch (error) {
      console.error("Error al eliminar de wishlist:", error.response?.data || error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        wishlist: state.wishlist,
        register,
        login,
        logout,
        getUserProfile,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
