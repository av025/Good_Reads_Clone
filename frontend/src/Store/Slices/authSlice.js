import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "src/Config/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const signup = createAsyncThunk("auth/signup",async (data) => {
    try { 
       const response = await toast.promise(
  axiosInstance.post("/signup", data),
  {
    loading: "Submitting the Form",
    success: "Successfully Signed Up",
    error: "Something went wrong",
  }
); 
console.log(response.data)
return response.data;

        
    } catch (error) {
        console.error(error.message);
        toast.error("We are not Signup , Something went wrong !!!!")
    }
})


export default authSlice.reducer