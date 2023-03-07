import { configureStore } from "@reduxjs/toolkit";
import {
  chatroomsReducer,
  singleChatroomReducer,
  authReducer,
  usersReducer,
} from "./slices/index.js";
import { authApi } from "services/authServices.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    chatrooms: chatroomsReducer,
    singleChatroom: singleChatroomReducer,
    users: usersReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
