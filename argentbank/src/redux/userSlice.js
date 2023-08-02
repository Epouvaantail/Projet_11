import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  userName: null,
  userNameAfterChange:null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setProfile: (state, action) => {
        state.id = action.payload.id;
        console.log(state.id)
        state.email = action.payload.email;
        console.log(state.email)
        state.firstName = action.payload.firstName;
        console.log(state.firstName)
        state.lastName = action.payload.lastName;
        console.log(state.lastName)
        state.userName = action.payload.userName;
        console.log(state.userName)
        state.userNameAfterChange = action.payload.userNameAfterChange
        },
        resetProfile: (state) => {
            state.id = null;
            state.email = null;
        },
    }
});

export const {
    setProfile,
    resetProfile,
  } = userSlice.actions;
  
  export default userSlice.reducer