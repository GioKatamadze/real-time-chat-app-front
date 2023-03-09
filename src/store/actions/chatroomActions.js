import { getChatrooms, getSingleChatroom } from "services/chatroomServices.js";
import { singleChatroomActions, chatroomsActions } from "store/slices/index.js";

export const fetchChatrooms = () => {
  return async (dispatch) => {
    const fetchChatroomsInfo = async () => {
      const response = await getChatrooms();
      return response.data;
    };
    try {
      const chatroom = await fetchChatroomsInfo();
      dispatch(chatroomsActions.fetchChatroom(chatroom));
    } catch (error) {}
  };
};

export const fetchSingleChatroom = (id) => {
  return async (dispatch) => {
    const fetchSingleChatroom = async () => {
      const response = await getSingleChatroom(id);
      return response.data;
    };
    try {
      const chatroom = await fetchSingleChatroom();
      dispatch(singleChatroomActions.fetchChatrooms(chatroom));
    } catch (error) {}
  };
};
