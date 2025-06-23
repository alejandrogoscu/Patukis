import axios from "axios";
import ProductReducer from "./ProductReducer";
import { createContext, useReducer } from "react";

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://patukisapi.onrender.com/products");
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al mostrar los productos:", error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
