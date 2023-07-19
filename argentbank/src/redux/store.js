import { configureStore } from '@reduxjs/toolkit'
import logReducer from "./logSlice"

const store = configureStore({
    reducer: {
      log: logReducer
    },
});
export default store;