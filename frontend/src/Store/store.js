import { configureStore } from "@reduxjs/toolkit"; 
import authSliceReducer from "src/Store/Slices/authSlice";
import bookSliceReducer from "src/Store/Slices/bookSlice";

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        book:bookSliceReducer
    },
    devTools: true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
}); 

export default store; 
