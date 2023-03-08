import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import signUpReducer from "../Reducer/signUpReducer/signUpReducer";
import thunk from "redux-thunk";

const store = createStore(
  signUpReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
