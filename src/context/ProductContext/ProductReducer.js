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
  }
};

export default products;
