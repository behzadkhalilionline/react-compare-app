import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { employeesReducer } from "./reducers/employeesReducer";
import { comparesReducer } from "./reducers/comparesReducer";
import { rootSaga } from "./sagas/rootSaga";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export default createStore(
  combineReducers({ employees: employeesReducer, compares: comparesReducer }),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
