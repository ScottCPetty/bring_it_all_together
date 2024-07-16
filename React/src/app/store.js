import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import loginReducer from "../components/Login/LoginSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
