import { getChatrooms, getSingleChatroom } from "services";
import { singleChatroomActions } from "store/slices";

export const fetchChatrooms = () => {
  return async (dispatch) => {
    const fetchChatroomsInfo = async () => {
      const response = await getChatrooms();
      return response.data;
    };

    try {
      const chatrooms = await fetchChatroomsInfo();
      dispatch(chatroomsActions.fetchChatroom(chatrooms));
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
