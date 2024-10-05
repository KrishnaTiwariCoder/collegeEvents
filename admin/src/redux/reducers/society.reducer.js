import { societyConstants } from "../contants";

const initialState = {
  society: {},
  loading: false,
  error: null,
};

export const societyReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case societyConstants.FETCH_SOCIETY_SUCCESS:
      return { ...state, loading: true, error: null };
    case societyConstants.FETCH_SOCIETY_SUCCESS:
      return { ...state, loading: false, society: action.payload };
    case societyConstants.FETCH_SOCIETY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
