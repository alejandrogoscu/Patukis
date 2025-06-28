import axios from "axios";
import ProductReducer from "./ProductReducer";
import { createContext, useEffect, useReducer } from "react";

const API_URL = "https://patukisapi.onrender.com/products";

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const token = localStorage.getItem("token") || "";

const initialState = {
  products: [],
  product: null,
  cart: cart,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL);
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
      const res = await axios.get(`${API_URL}/${_id}`);

      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error al mostrar el producto:", error);
    }
  };

  const createProduct = async (product, isFormData = false) => {
    try {
      const headers = isFormData
        ? { Authorization: `Bearer ${token}` }
        : { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

      const config = {
        method: "POST",
        headers,
        body: isFormData ? product : JSON.stringify(product),
      };

      const res = await fetch(API_URL, config);
      if (!res.ok) throw new Error("Error al crear el producto");
      const data = await res.json();

      dispatch({
        type: "CREATE_PRODUCT",
        payload: data.product,
      });
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  const updateProduct = async (id, data, isFormData = false, token) => {
    try {
      const headers = isFormData
        ? { Authorization: `Bearer ${token}` }
        : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

      const config = {
        method: "PUT",
        headers,
        body: isFormData ? data : JSON.stringify(data),
      };

      const res = await fetch(`${API_URL}/${id}`, config);
      if (!res.ok) throw new Error("Error al actualizar el producto");
      const result = await res.json();
      return result;
    } catch (error) {
      console.error("Fallo en updateProduct: ", error);
      throw error;
    }
  };

  const deleteProduct = async (_id) => {
    try {
      await axios.delete(`${API_URL}/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "DELETE_PRODUCT",
        payload: _id,
      });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,
        getProducts,
        getOneProduct,
        addToCart,
        clearCart,
        removeFromCart,
        updateProduct,
        deleteProduct,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
