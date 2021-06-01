import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storeReducer from "./Redux/Reducers/index";
import promise from "redux-promise-middleware";

const initialState = {};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  storeReducer,
  { ...initialState },
  composeEnhancers(applyMiddleware(promise, logger))
);

export default store;
