import { combineReducers } from "redux";
import signUpReducer from "../signUpReducer/signUpReducer";
import postReducer from "../PostReducer/PostReducer";

const rootReducer = combineReducers({
  signUpReducer,
  postReducer,
});

export default rootReducer;
