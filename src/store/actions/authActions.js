import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = `${process.env.REACT_APP_API_URL}`;

export const userLogin = createAsyncThunk(
  "auth//login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        apiURL + "/api/login",
        { email, password },
        config
      );

      localStorage.setItem("userToken", data.userToken);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(apiURL + "/api/register", { email, password }, config);
      console.log(apiURL + "/api/register");
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
