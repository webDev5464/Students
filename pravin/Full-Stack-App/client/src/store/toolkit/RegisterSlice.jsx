import { createSlice } from "@reduxjs/toolkit";
import { UserRegisterPost } from "./UserThunk";

const initialState = {
  loading: false,
  error: false,
  errorMsg: "",
  successMsg: "",
  success: false,
  regUser: [], 
};

const RegisterSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserRegisterPost.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
        state.errorMsg = "";
        state.successMsg = "";
      })
      .addCase(UserRegisterPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.successMsg = action.payload.data;
        state.regUser.push(action.payload.config.data); 
      })
      .addCase(UserRegisterPost.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = action.payload || "Registration failed. Please try again.";
        state.error = true;
      });
  },
});

const Registeredslice = RegisterSlice.reducer;
export default Registeredslice;
