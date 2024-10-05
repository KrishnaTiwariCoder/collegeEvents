import authReducer from "./auth.reducer";
import { societyReducer } from "./society.reducer";

const reducer = {
  auth: authReducer,
  society: societyReducer,
};

export default reducer;
