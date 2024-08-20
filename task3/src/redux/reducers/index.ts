import { combineReducers } from "redux";
import postSlice from "./postSlice";

export default combineReducers({
  posts: postSlice,
});
