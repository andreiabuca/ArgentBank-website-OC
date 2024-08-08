import error from "mongoose/lib/error";

const initialState = {
  userInfo: {},
  userToken: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        userInfo: action.payload.userInfo,
        userToken: action.payload.token,
        error: null,
      };
      case 'USER_LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
    default:
      return state;
  }
};
export default userReducer;