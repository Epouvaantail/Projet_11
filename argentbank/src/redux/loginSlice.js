import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: localStorage.getItem('token')
};
  
  console.log(initialState)
  

  const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        login: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
    },
});
export const {login, logout} = loginSlice.actions;

export default loginSlice.reducer;