import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "src/Config/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = await toast.promise(axiosInstance.post("/signup", data), {
      loading: "Submitting the Form",
      success: "Successfully Signed Up",
      error: "Something went wrong",
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data?.err) {
      toast.error(error?.response?.data?.err);
    } else {
      toast.error("We are not Signup , Something went wrong !!!!");
    }
  }
});

export const signin = createAsyncThunk("auth/signin", async (data) => {
  try {
    const response = await toast.promise(axiosInstance.post("/signin", data), {
      loading: "Submitting the Form",
      success: "Successfully Signed In",
      error: "Something went wrong",
    });

    return response.data;
  } catch (error) {
    console.error(error.message);
    toast.error("We are not Signin , Something went wrong !!!!");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.username = "";
      localStorage.clear(); 
    }
  },
  extraReducers: (builder) => {
  builder.addCase(signin.fulfilled, (state, action) => {
    if (action?.payload?.data) {
      const receivedData = action.payload.data;

      state.isLoggedIn = true;
      state.username = receivedData.username;
      state.token = receivedData.token;

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", receivedData.username);
      localStorage.setItem("token", receivedData.token);
    }
  });
}

}); 

export const {logout} = authSlice.actions; 

export default authSlice.reducer;
