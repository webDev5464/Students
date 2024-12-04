import {configureStore} from "@reduxjs/toolkit"
import  Registeredslice  from "./toolkit/RegisterSlice";
import Loginedslice from "./toolkit/LoginSlice";
const store = configureStore({
    reducer: {
      UserRegister : Registeredslice,
      UserLogin :Loginedslice,
    }
});

export default store
