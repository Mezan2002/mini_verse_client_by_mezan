import { combineReducers } from "redux";
import signUpReducer from "../signUpReducer/signUpReducer";

const rootReducer = combineReducers({
  signUpReducer,
});

export default rootReducer;
