import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "src/Config/axiosInstance";

const initialState = {
  bookList:[]
};

export const getAllBooks = createAsyncThunk("course/getAllBooks", async () => {
  try {
       const response = await toast.promise(axiosInstance.get("/books"), {
      loading: "Loading Books Data",
      success: "Successfully loaded all the books",
      error: "Something went wrong",
    });
    return response.data; 

  } catch (error) { 
    console.error(error); 
    toast.error("Something went wrong while fetching all books")
     
  }
});



const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  builder.addCase(getAllBooks.fulfilled, (state, action) => { 
    console.log(action)
    if(action?.payload?.data){
      state.bookList = action?.payload?.data;
    }
  });
}

}); 


export default bookSlice.reducer;
