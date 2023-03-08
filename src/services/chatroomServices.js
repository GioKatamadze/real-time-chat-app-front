import instance from "./axios.js";

export const getChatrooms = () => {
  return instance.get("/chatrooms");
};

export const getSingleChatroom = (id) => {
  return instance.get("/chatrooms/" + id);
};

export const addMessage = (data) => {
  return instance.post("/message", data);
};

export const getUsers = () => {
  return instance.get("/users");
};
