import { configureStore } from "@reduxjs/toolkit";
import { logData } from "./slices/loginDataSlice";
import { registerGetData } from "./slices/registerGetDataSlice";
import { registerPostData } from "./slices/registerPostDataSlice";

export const Store = configureStore({
    reducer : {
        getData : registerGetData,
        postData : registerPostData,
        login : logData
    }
})