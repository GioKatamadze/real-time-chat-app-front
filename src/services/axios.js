import axios from "axios";

const instance = axios.create({
  baseURL: `https://real-time-chat-app-back-production.up.railway.app/api`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
