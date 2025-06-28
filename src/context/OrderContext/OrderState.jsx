import { createContext, useContext } from 'react';
import { UserContext } from '../UserContext/UserState';
import axios from 'axios';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const createOrder = async (cart) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'https://patukisapi.onrender.com/orders',
        { id_user: user._id, id_products: cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return <OrderContext.Provider value={{ createOrder }}>{children}</OrderContext.Provider>;
};
