import { configureStore } from '@reduxjs/toolkit'
import {produce} from "immer";

const initialState = {
  user: {},
  token: localStorage.getItem("token")
};

console.log(initialState)

export const saveToken = (token) => ({ type: "saveToken", payload: token });
export const deleteToken = () => ({ type: "deleteToken" });
export const saveProfile = (profile) => ({ type: "saveProfile", payload: profile });

function reducer(state = initialState, action) {

  if(action.type === "saveToken") {
      localStorage.setItem("token", action.payload);
      return produce(state, (draft) => {
          draft.token = action.payload;
          console.log(draft.token)
      });
  }    

  if(action.type === "deleteToken") {
      localStorage.removeItem("token");
      return produce(state, (draft) => {
          draft.token = "";
      });
  }

  if(action.type === "saveProfile") {
      return produce(state, (draft) => {
          draft.profile = action.payload;
          console.log(draft.profile)
      });
  }

  return state;
}

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState
});

export default store