import {
  COMPARES_SET_SUCCESSED,
  COMPARES_GET_SUCCESSED,
} from "../constants/compares";

export const comparesReducer = function (state = [], action) {
  switch (action.type) {
    case COMPARES_SET_SUCCESSED:
      if (state.findIndex((item) => item.id === action.data.id) >= 0) {
        return state.filter((item) => item.id !== action.data.id);
      }

      if (state.length >= 2) {
        state.shift();
      }

      return [...state, action.data];

    case COMPARES_GET_SUCCESSED:
    default:
      return state;
  }
};
