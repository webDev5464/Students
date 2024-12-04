import { createSlice } from "@reduxjs/toolkit";
import { UserLoginPost } from "./UserThunk";

const initialState = {
  loading: false,
  error: false,
  errorMsg: "",
  successMsg: "",
  success: false,
  logUser: [], 
};

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserLoginPost.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
        state.errorMsg = "";
        state.successMsg = "";
      })
      .addCase(UserLoginPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.errorMsg = "";
        state.successMsg = action.payload.data;
        state.logUser.push(action.payload.config.data); 
      })
      .addCase(UserLoginPost.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = action.payload;
        state.error = true;
        state.success = false;
        state.successMsg = "";
      });
  },
});


const Loginedslice = LoginSlice.reducer;
export default Loginedslice;
