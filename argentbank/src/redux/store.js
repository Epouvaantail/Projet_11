import { configureStore } from "@reduxjs/toolkit"
import combineReducer from "./combineReducer.js"

const store = configureStore({
  reducer: combineReducer
})

export default store