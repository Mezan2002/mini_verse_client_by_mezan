import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import signUpReducer from "../Reducer/signUpReducer/signUpReducer";

const store = createStore(signUpReducer, composeWithDevTools());

export default store;
