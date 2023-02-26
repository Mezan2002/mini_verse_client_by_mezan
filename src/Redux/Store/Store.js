import { createStore } from "redux";
import signUpReducer from "../Reducer/signUpReducer/signUpReducer";

const store = createStore(signUpReducer);

export default store;
