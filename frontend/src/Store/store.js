import { configureStore } from "@reduxjs/toolkit"; 
import authSliceReducer from "src/Store/Slices/authSlice"

const store = configureStore({
    reducer:{
        auth:authSliceReducer
    },
    devTools: true,
}); 

export default store;