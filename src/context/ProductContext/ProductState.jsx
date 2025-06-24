import axios from "axios";
import ProductReducer from "./ProductReducer";
import { createContext, useReducer } from "react";

const API_URL = "https://patukisapi.onrender.com/products";

const initialState = {
  products: [],
  product: null,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al mostrar los productos:", error);
    }
  };
  const getOneProduct = async (_id) => {
    try {
      console.log("llamando a la API con id: ", _id);
      const res = await axios.get(`${API_URL}/${_id}`);
      console.log("respuesta del producto: ", res.data);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al mostrar el producto:", error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        getProducts,
        getOneProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
