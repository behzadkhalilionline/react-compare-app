import { put, takeLatest } from "redux-saga/effects";
import {
  COMPARES_SET_REQUESTED,
  COMPARES_SET_SUCCESSED,
} from "../constants/compares";

function* setCompares({ data }) {
  yield put({
    type: COMPARES_SET_SUCCESSED,
    data,
  });
}

export function* comparesSaga() {
  yield takeLatest(COMPARES_SET_REQUESTED, setCompares);
}
