import { all, call } from "redux-saga/effects";
import { employeesSaga } from "./employeesSaga";
import { comparesSaga } from "./comparesSaga";

export function* rootSaga() {
  yield all([call(employeesSaga), call(comparesSaga)]);
}
