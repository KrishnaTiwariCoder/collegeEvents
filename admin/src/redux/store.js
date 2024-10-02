import { configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import reducer from "./reducers";

const middleware = [thunk];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preLoadedState = {
  token: localStorage.getItem("token"),
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer,
  preLoadedState,
});

export default store;
