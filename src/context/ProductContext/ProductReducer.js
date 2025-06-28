const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_ONE_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "CREATE_PRODUCT":
      return {
        ...state,
        product: [action.payload, ...state.products],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((p) => (p._id === action.payload._id ? action.payload : p)),
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product._id !== action.payload),
      };

    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
};

export default products;
