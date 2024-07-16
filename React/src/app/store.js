import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import loginReducer from "../components/Login/LoginSlice";
import registerReducer from "../components/Registration/RegistrationSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    login: loginReducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
