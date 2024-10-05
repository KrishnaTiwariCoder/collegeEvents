import axios from "../../helpers/axios";
import { societyConstants } from "../contants";

export const fetchSocietyByOwnerId = () => {
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  return async (dispatch) => {
    dispatch({ type: societyConstants.FETCH_SOCIETY_REQUEST });
    try {
      const response = await axios.post(`/society/getSocietiesByOwner/${_id}`);
      dispatch({
        type: societyConstants.FETCH_SOCIETY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: societyConstants.FETCH_SOCIETY_FAILURE,
        payload: error.message,
      });
    }
  };
};
