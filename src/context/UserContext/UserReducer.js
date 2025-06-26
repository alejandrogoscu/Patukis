export const initialState = {
  user: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
