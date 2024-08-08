const initialState = {
    userInfo: {},
    userToken: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          userInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;