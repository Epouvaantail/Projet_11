import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice"
import userSlice from "./userSlice"

const combineReducer = combineReducers({
  login: loginSlice,
  user: userSlice,
});

export default combineReducer;