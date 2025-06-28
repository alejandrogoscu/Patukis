import axios from "axios";
import OrderReducer from "./OrderReducer.js";
import { createContext, useReducer } from "react";

const API_URL = "https://patukisapi.onrender.com/orders";

const token = localStorage.getItem("token") || "";
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  orders: [],
  order: null,
};

export const OrderContext = createContext(initialState);

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const getOrders = async () => {
    try {
      const res = await axios.get(API_URL);
      dispatch({
        type: "GET_ORDERS",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al mostrar los pedidos realizados:", error);
    }
  };

  return (
    <OrderProvider.Provider
      value={{
        orders: state.orders,
        order: state.order,
        getOrders,
      }}
    >
      {children}
    </OrderProvider.Provider>
  );
};
