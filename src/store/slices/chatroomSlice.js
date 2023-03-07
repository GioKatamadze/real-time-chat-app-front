import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const chatroomSlice = createSlice({
  name: "chatrooms",
  initialState,
  reducers: {
    fetchChatroom: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const chatroomsReducer = chatroomSlice.reducer;
export const chatroomsActions = chatroomSlice.actions;
