import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatroom: {
    id: 0,
    title: "",
    messages: [],
  },
};

const singleChatroomSlice = createSlice({
  name: "single chatroom",
  initialState,
  reducers: {
    fetchChatrooms: (state, action) => {
      state.feedback = action.payload;
    },

    addMessage: (state, action) => {
      const clone = state.chatroom;
      clone.messages.push(action.payload);
      state.chatroom = clone;
    },
  },
});

export const singleChatroomReducer = singleChatroomSlice.reducer;
export const singleChatroomActions = singleChatroomSlice.actions;
