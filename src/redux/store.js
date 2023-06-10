import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import userSlice from "./services/userSlice";
import { contactApi } from "./auth/contactApi";
import contactSlice from "./services/contactSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    contactSlice: contactSlice,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),
});
