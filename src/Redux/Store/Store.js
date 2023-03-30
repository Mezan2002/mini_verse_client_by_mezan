import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import signUpReducer from "../Reducer/signUpReducer/signUpReducer";
import thunk from "redux-thunk";
import { fetchInitialState } from "../ActionCreator/ActionCreator";

const store = createStore(
  signUpReducer,
  // window.__INITIAL_STATE__,
  composeWithDevTools(applyMiddleware(thunk))
);

// store.dispatch(fetchInitialState());

export default store;
