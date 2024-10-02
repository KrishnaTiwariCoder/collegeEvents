import axios from "../../helpers/axios";
import { authConstants } from "../contants";
import { toast } from "react-toastify";

export const _Login = (user) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    console.log(user);
    axios
      .post(`/admin/login`, {
        ...user,
      })
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
          window.location.reload();
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
          toast.error("Invalid details or create an account first ");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid details or create an account first ");
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: "Something went wrong :(" },
        });
      });
  };
};

export const _Register = (user) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.USER_REQUEST,
    });
    console.log(user);
    axios
      .post(`/admin/register`, {
        ...user,
      })
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
          window.location.reload();
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
          toast.error("Invalid details or create an account first ");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid details or create an account first ");
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: "Something went wrong :(" },
        });
      });
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
  };
};
