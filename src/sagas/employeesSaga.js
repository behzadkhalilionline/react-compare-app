import { call, put, takeLatest } from "redux-saga/effects";
import {
  EMPLOYEES_FETCH_REQUESTED,
  EMPLOYEES_FETCH_SUCCESSED,
  EMPLOYEES_FETCH_FAILED,
} from "../constants/employees";
import { fetchEmployees as fetchEmployeesAPI } from "../api/employees";

function* fetchEmployees() {
  try {
    const { data } = yield call(fetchEmployeesAPI);

    yield put({
      type: EMPLOYEES_FETCH_SUCCESSED,
      data,
    });
  } catch (error) {
    yield put({
      type: EMPLOYEES_FETCH_FAILED,
      message: error.message,
    });
  }
}

export function* employeesSaga() {
  yield takeLatest(EMPLOYEES_FETCH_REQUESTED, fetchEmployees);
}
