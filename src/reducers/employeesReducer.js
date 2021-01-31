import {
  EMPLOYEES_FETCH_SUCCESSED,
  EMPLOYEES_GET_LIST,
} from "../constants/employees";

export const employeesReducer = function (state = [], action) {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESSED:
      return action.data;

    case EMPLOYEES_GET_LIST:
    default:
      return state;
  }
};
