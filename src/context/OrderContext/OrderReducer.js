const orders = (state, action) => {
  switch (action.type) {
    case "CREATE_ORDERS":
      return {
        ...state,
        order: action.payload,
      };

    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
  }
};

export default orders;
