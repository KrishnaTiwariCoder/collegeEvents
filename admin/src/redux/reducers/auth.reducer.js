import { authConstants } from "../contants";
const initState = {
  token: "",
  user: {},
  loading: false,
};

const authReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case authConstants.LOGIN_SUCCESS:
      state = {
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
      break;

    case authConstants.LOGIN_FAILURE: {
      state = {
        ...state,
        user: {},
        token: "",
        loading: false,
      };
      break;
    }
    case authConstants.LOGOUT_REQUEST: {
      state = initState;
      localStorage.clear();
      break;
    }
    default:
  }
  return state;
};
export default authReducer;
