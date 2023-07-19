import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name:"log",
    initialState:{
        token:"",
    },
    reducers:{
        setLog:(state, action) => {
            console.log(action.payload.grabToken, "reducer");
            state.token = action.payload.grabToken;
        }
    }
});

export const {setLog} = logSlice.actions
export default logSlice.reducer