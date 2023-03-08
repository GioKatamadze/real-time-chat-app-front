import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:5000/api`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
